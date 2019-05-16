import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  ViewChild
} from '@angular/core';
import {CdkScrollable} from '@angular/cdk/overlay';
import {DOCUMENT, isPlatformServer} from '@angular/common';
import {animationFrameScheduler, from, fromEvent, merge, Observable, Subject, Subscription} from 'rxjs';
import {debounceTime, filter, map, throttleTime} from 'rxjs/operators';
import {PriHorizontalScrollbarPositions, PriScrollbarOverflowTypes, PriVerticalScrollbarPositions} from './enumerations';

/**
 * ProScrollbar component:
 * If you find something weird in this code, feel free to contact me, i wrote this component after a 20 hours workday.. so be gentle :)
 * */
@Component({
  selector: 'pri-scrollbar',
  templateUrl: 'pri.scrollbar.component.html',
  styleUrls: ['pri.scrollbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriScrollbarComponent implements AfterViewInit, OnDestroy, AfterViewChecked {

  /**constructor*/
  constructor(@Inject(PLATFORM_ID) private _platform: Object, private cd: ChangeDetectorRef,
              @Inject(DOCUMENT) protected document: any, private renderer: Renderer2, private zone: NgZone) {
    // set helper if its ssr
    this._isSSR = isPlatformServer(this._platform);
    // if its not ssr we will subscribe the mouse enter event
    if (!this._isSSR) {
      // mouse move / up events
      this._documentMouseMove$ = fromEvent(this.document, 'mousemove');
      this._documentMouseUp$ = fromEvent(this.document, 'mouseup');
      // init old state
      this._oldState = { showX: true, showY: true };
      // state changed (only trigger if its initialized)
      this._stateChanged$.pipe(filter(() => this._initialized))
        .subscribe((state) => this._stateChanged(state));
    }
  }

  /**
   * to prevent variations in calcuated scrollbar size, based on value rounding (offset, client size) when zoom factor is used
   * or when percent values are used for width and height, we assume that our native scrollbar size is 20px (it doesn't matter if its
   * smaller, but we will ocver scrollbar with size smaller than this value)
   */
  private readonly ASSUME_SCROLLBAR_SIZE = 20;
  /** check if size changed (we are only reacting to changes if its more than 2px)
   * because we have set a width in percentage, which can cause rounding problems especially with different zoom factors
   * to get rid of the rounding differences, and prevent to recalculate bec. of those, we use 2px as threshold */
  private readonly SIZE_CHANGE_THRESHHOLD = 2;
  /**window resize debounce time*/
  private readonly WINDOW_RESIZE_DEBOUNCE_TIME = 200;
  /**resize throttle*/
  private readonly RESIZE_THROTTLE = 200;
  /**transition siz echanged properties*/
  private readonly TRANSITION_SIZE_PROPERTIES =
    ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight' , 'padding', 'margin'];
  /**default scrollbar size*/
  private readonly DEFAULT_SCROLLBAR_SIZE = 8;
  /**subscriptions*/
  private _scrollSub = Subscription.EMPTY;
  private _mouseMoveSub = Subscription.EMPTY;
  private _mouseUpSub = Subscription.EMPTY;
  private _horizontalMouseDownSub = Subscription.EMPTY;
  private _verticalMouseDownSub = Subscription.EMPTY;
  private _resizedSub = Subscription.EMPTY;

  /**observer (for content changes)*/
  private _resizeObserver: MutationObserver;

  /**
   * initialized
   * this is just a helper to prevent multiple dom access (style changes etc.) when view is initialized
   * TODO: cleanup and remove this, there are way better solutions -> but thats the fastest one to implement
   * * */
  private _initialized = false;
  /**is ssr*/
  private readonly _isSSR: boolean = false;
  /**
   * scrollbar changes
   * used for internal changes: so we can implement the whole change logic at one position
   * */
  private readonly _stateChanged$ = new Subject<PriScrollState>();
  /**old state need to compare old and new state*/
  private _oldState: PriScrollState;

  /**mouse event obs.*/
  private readonly _documentMouseMove$: Observable<MouseEvent>;
  private readonly _documentMouseUp$: Observable<MouseEvent>;

  /**************** ScrollBars (vertical / horizontal) **************/
  /**vertical scrollbar*/
  private _vertical: ElementRef;
  /**vertical (scrollbar)*/
  @ViewChild('vertical') set vertical(value: ElementRef) {
    if (this._vertical !== value) {
      this._vertical = value;
      if (this._vertical) {
        this._updateState();
      }
    }
  }
  get vertical(): ElementRef {
    return this._vertical;
  }
  /**vertical thumb */
  private _verticalThumb: ElementRef;
  @ViewChild('verticalThumb') set verticalThumb(value: ElementRef) {
    if (this._verticalThumb !== value) {
      this._verticalThumb = value;
      if (this._verticalThumb) {
        this._updateState();
        this.refreshMouseEvents(false);
      }
    }
  }
  get verticalThumb(): ElementRef {
    return this._verticalThumb;
  }
  /**horizontal scrollbar*/
  private _horizontal: ElementRef;
  /**vertical (scrollbar)*/
  @ViewChild('horizontal') set horizontal(value: ElementRef) {
    if (this._horizontal !== value) {
      this._horizontal = value;
      if (this._horizontal) {
        this._updateState();
      }
    }
  }
  get horizontal(): ElementRef {
    return this._horizontal;
  }
  /**horizontal thumb */
  private _horizontalThumb: ElementRef;
  @ViewChild('horizontalThumb') set horizontalThumb(value: ElementRef) {
    if (this._horizontalThumb !== value) {
      this._horizontalThumb = value;
      if (this._horizontalThumb) {
        this._updateState();
        // add event
        this.refreshMouseEvents(true);
      }
    }
  }
  get horizontalThumb(): ElementRef {
    return this._horizontalThumb;
  }

  /************* ScrollContainer / Scroll Content *******************/
  /**scroll abel (native element)*/
  private _scrollableNative: HTMLElement;
  @ViewChild(CdkScrollable) scrollable: CdkScrollable;
  /**scroll container*/
  @ViewChild('scrollbarContainer') scrollbarContainer: ElementRef;


  /************* Scrollbar margins **********************************/
  /**margins x*/
  private _marginsX: Thickness = { top: this.DEFAULT_SCROLLBAR_SIZE / 2, bottom: this.DEFAULT_SCROLLBAR_SIZE / 2,
    left: this.DEFAULT_SCROLLBAR_SIZE / 2, right: this.DEFAULT_SCROLLBAR_SIZE * 1.5 };
  @Input() set marginsX(value: string) {
    this._marginsX = this.convertToThickness(value);
    // refresh
    this._updateState(false, true);
  }
  /**margins y*/
  private _marginsY: Thickness = { top: this.DEFAULT_SCROLLBAR_SIZE / 2, bottom: this.DEFAULT_SCROLLBAR_SIZE * 1.5,
    left: this.DEFAULT_SCROLLBAR_SIZE / 2, right: this.DEFAULT_SCROLLBAR_SIZE / 2 };
  @Input() set marginsY(value: string) {
    this._marginsY = this.convertToThickness(value);
    // refresh
    this._updateState(false, true);
  }

  /************* Scrollbar Positions **************/
  /**x position*/
  private _xPosition: PriHorizontalScrollbarPositions = PriHorizontalScrollbarPositions.bottom;
  @Input() set xPosition(value: PriHorizontalScrollbarPositions) {
    // fallback to right
    this._xPosition = value === PriHorizontalScrollbarPositions.top ? value : PriHorizontalScrollbarPositions.bottom;
    // refresh
    this._updateState(false, true);
  }
  /**y position*/
  private _yPosition: PriVerticalScrollbarPositions = PriVerticalScrollbarPositions.right;
  @Input() set yPosition(value: PriVerticalScrollbarPositions) {
    // fallback to right
    this._yPosition = value === PriVerticalScrollbarPositions.left ? value : PriVerticalScrollbarPositions.right;
    // refresh
    this._updateState(false, true);
  }
  /************* overflow X / Y *******************/
  @Input()
  @HostBinding('attr.overflowX')
  overflowX: PriScrollbarOverflowTypes | string = PriScrollbarOverflowTypes.auto;
  @Input()
  @HostBinding('attr.overflowY')
  overflowY: PriScrollbarOverflowTypes | string = PriScrollbarOverflowTypes.auto;
  /**show x*/
  hasXScrollbar = true;
  hasYScrollbar = true;

  /**
   * after view init
   * */
  ngAfterViewInit() {
    // only if its not ssr
    if (!this._isSSR) {
      // get native element of scrollbar
      this._scrollableNative = this.scrollable.getElementRef().nativeElement;
      // refresh vertical bar when scrolled
      this._scrollSub = this.scrollable.elementScrolled().subscribe(() => {
        // update state
        this._updateState();
      });
      // set initialized (to force refresh)
      this._initialized = true;
      // update state (we force a complete refresh)
      this._updateState(true, true);
    }
  }
  /**
   * need to update state after view checked
   * this is required when i.e. the scrollbar is presented as or in ng-content.
   * The scrollbar is created immediately no matter if ng-content is added to dom or not. If its not in the dom the native-scrollbar size
   * is zero and the custom scrollbar is not shown. AfterViewChecked will be called when the ng-content is added to dom, and then we can
   * recheck if we need to show the scrollbar.
   *
   * The pratical usecase here was: mat-autocomplete where the autocomplete should use pri-scrollbar
   */
  ngAfterViewChecked(): void {
    this._updateState();
  }
  /**destroy*/
  ngOnDestroy() {
    this._stopResizeListener();
    this._resizedSub.unsubscribe();
    this._stateChanged$.complete();
    this._scrollSub.unsubscribe();
    this._mouseMoveSub.unsubscribe();
    this._mouseUpSub.unsubscribe();
    this._horizontalMouseDownSub.unsubscribe();
    this._verticalMouseDownSub.unsubscribe();
  }
  /**ini size changes*/
  private _startResizeListener() {
    // we are creating our own subject
    const mutationSubject = new Subject<void>();
    this._resizeObserver = new MutationObserver(() => mutationSubject.next());
    this._resizedSub = merge(
      fromEvent(window, 'resize').pipe(debounceTime(this.WINDOW_RESIZE_DEBOUNCE_TIME)),
      from(mutationSubject),
      // only check for specific transition property names
      fromEvent(document, 'transitionend').pipe(
        filter((te: TransitionEvent) => this.TRANSITION_SIZE_PROPERTIES.indexOf(te.propertyName) >= 0)
      )
    ).pipe(
        // throttle here (bec we want to see i.e. content size changes immediately
        throttleTime(this.RESIZE_THROTTLE),
        map(() => {
          // content size changed
          return Math.abs(this._scrollableNative.scrollHeight - this._oldState.scrollHeight) > this.SIZE_CHANGE_THRESHHOLD
            || Math.abs(this._scrollableNative.scrollWidth - this._oldState.scrollWidth) > this.SIZE_CHANGE_THRESHHOLD
            // scrollbar size changed
            || Math.abs(this._scrollableNative.offsetWidth - this._oldState.offsetWidth) > this.SIZE_CHANGE_THRESHHOLD
            || Math.abs(this._scrollableNative.offsetHeight - this._oldState.offsetHeight) > this.SIZE_CHANGE_THRESHHOLD;
        }),
        // only if there are changes
        filter(changed => changed === true)
    ).subscribe(() => {
      this._updateState(true, true);
    });
    // observe mutation changes
    this._resizeObserver.observe(document, { attributes: true, childList: true, characterData: true, subtree: true });
  }
  /**removes the resize listener*/
  private _stopResizeListener() {
    if (this._resizeObserver) {
      this._resizedSub.unsubscribe();
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }

  /**state changed*/
  private _stateChanged(state: PriScrollState) {
    // show / hide scrollbars
    this.hasXScrollbar = state.showX;
    this.hasYScrollbar = state.showY;
    // helper
    const nativeScrollbarSizeChanged = state.nativeScrollbarSize !== this._oldState.nativeScrollbarSize;
    // requires scroll
    state.xRequiresScroll = state.showX &&
                            (this._scrollableNative.clientWidth < this._scrollableNative.scrollWidth ||
                             this.overflowX === PriScrollbarOverflowTypes.scroll);
    state.yRequiresScroll = state.showY &&
                            (this._scrollableNative.clientHeight < this._scrollableNative.scrollHeight ||
                             this.overflowY === PriScrollbarOverflowTypes.scroll);
    // changed
    const showXChanged = (state.showX !== this._oldState.showX);
    const showYChanged = (state.showY !== this._oldState.showY);
    const xRequiresScrollChanged = state.xRequiresScroll !== this._oldState.xRequiresScroll;
    const yRequiresScrollChanged = state.yRequiresScroll !== this._oldState.yRequiresScroll;

    // create / add mutation observer if there is at least one custom scrollbar visible
    if (!this._resizeObserver && (state.showX || state.showY)) {
      this._startResizeListener();
    } else if (this._resizeObserver && !state.showX && !state.showY) {
      this._stopResizeListener();
    }
    // we need to update containers when:
    // 1: show changed or
    // 2: native scrollbar size changed
    if (state.forceContainerRefresh || showYChanged || nativeScrollbarSizeChanged) {
      this.refreshVerticalContainer(state.showY, state.nativeScrollbarSize);
    }
    if (state.forceContainerRefresh || showXChanged || nativeScrollbarSizeChanged) {
      this.refreshHorizontalContainer(state.showX, state.nativeScrollbarSize);
    }
    // refresh scroll item (container of the scroll thumb)
    if (state.forceScrollbarItemRefresh || showXChanged || yRequiresScrollChanged || nativeScrollbarSizeChanged) {
      this.refreshVerticalScrollbarItem(state.nativeScrollbarSize, state.yRequiresScroll);
    }
    if (state.forceScrollbarItemRefresh || showYChanged || xRequiresScrollChanged || nativeScrollbarSizeChanged) {
      this.refreshHorizontalScrollbarItem(state.nativeScrollbarSize, state.xRequiresScroll);
    }
    // refresh thumbs
    animationFrameScheduler.schedule(() => {
      // vertical
      if (state.showY && this.vertical && this.verticalThumb) {
        this.refreshVerticalThumb(state.nativeScrollbarSize);
      }
      // horizontal
      if (state.showX && this.horizontal && this.horizontalThumb) {
        this.refreshHorizontalThumb(state.nativeScrollbarSize);
      }
    });
    // we need to trigger change detection for this component, bec. we have a binding on hasXScrollbar, hasYScrollbar which are set to
    // showX and showY
    if (state.forceContainerRefresh || showXChanged || showYChanged) {
      this.cd.detectChanges();
    }
    // set state
    this._oldState = state;
  }
  /**builds the current state*/
  private _updateState(forceContainerRefresh: boolean = false, forceItemRefresh: boolean = false) {
    // sec. checks
    if (!this._isSSR && this.scrollable && this._scrollableNative) {
      // calculate native scrollbar size (theoretically we dont need to calculate the scrollbar size on every state change)
      // but it shouldn't be a problem in case of performance
      let nativeScrollbarSize = this.overflowY !== PriScrollbarOverflowTypes.hidden
                                 ? this._scrollableNative.offsetWidth - this._scrollableNative.clientWidth
                                 : this._scrollableNative.offsetHeight - this._scrollableNative.clientHeight;
      // if the scrollbar is 0, that means the browser do not support custom scrollbars
      // based on the "ASSUME_SCROLLBAR_SIZE" description, we always take hide scrollbars up to 20px with a static value
      // this prevent browser rounding problems, when zoom factor or percent width/height is set
      if (nativeScrollbarSize > 0) {
        nativeScrollbarSize = nativeScrollbarSize <= this.ASSUME_SCROLLBAR_SIZE ? this.ASSUME_SCROLLBAR_SIZE : nativeScrollbarSize;
      }
      // show vertical scroll bar
      // if native scrollbar size is 0 its a floatingScrollW. and we cant use pri-scrollbar
      const showY = nativeScrollbarSize > 0 &&
        (this.overflowY === PriScrollbarOverflowTypes.auto || this.overflowY === PriScrollbarOverflowTypes.scroll);
      // show horizontal scrollbar
      const showX = nativeScrollbarSize > 0 &&
        (this.overflowX === PriScrollbarOverflowTypes.auto || this.overflowX === PriScrollbarOverflowTypes.scroll);
      // init scroll state
      const newState: PriScrollState = {
        showX: showX,
        showY: showY,
        nativeScrollbarSize: nativeScrollbarSize,
        forceContainerRefresh: forceContainerRefresh,
        forceScrollbarItemRefresh: forceItemRefresh,
        scrollHeight: this._scrollableNative.scrollHeight,
        scrollWidth: this._scrollableNative.scrollWidth,
        offsetHeight: this._scrollableNative.offsetHeight,
        offsetWidth: this._scrollableNative.offsetWidth,
      };
      // emit state
      this._stateChanged$.next(newState);
    }
  }

  /**refresh container*/
  private refreshVerticalContainer(showY: boolean, nativeScrollbarSize: number) {
    const size = `calc(100% + ${nativeScrollbarSize}px)`;
    const width = showY ? size : <any>'100%';
    this.renderer.setStyle(this.scrollbarContainer.nativeElement, 'width', width);
  }
  /**refresh horizontal container*/
  private refreshHorizontalContainer(showX: boolean, nativeScrollbarSize: number) {
    const size = `calc(100% + ${nativeScrollbarSize}px)`;
    const height = showX ? size : <any>'100%';
    this.renderer.setStyle(this.scrollbarContainer.nativeElement, 'height', height);
  }
  /**refresh vertical scrollbar item*/
  private refreshVerticalScrollbarItem(nativeScrollbarSize: number, requiresScroll: boolean) {
    // not nec. but better check once more
    if (this.vertical && this.vertical.nativeElement) {
      // if the content is not using the full height, we can hide our scroll bar (by setting display: none)
      // better performance for this case compared to ngIf
      if (!requiresScroll) {
        this.renderer.setStyle(this.vertical.nativeElement, 'display', 'none');
      } else {
        // update vertical scrollbar position
        const scrollBarSize = `${nativeScrollbarSize}px`;
        this.renderer.setStyle(this.vertical.nativeElement, 'display', 'block');
        // position is left
        if (this._yPosition === PriVerticalScrollbarPositions.left) {
          this.renderer.setStyle(this.vertical.nativeElement, 'right', 'auto');
          this.renderer.setStyle(this.vertical.nativeElement, 'left', '0');
        } else {
          this.renderer.setStyle(this.vertical.nativeElement, 'right', scrollBarSize);
          this.renderer.setStyle(this.vertical.nativeElement, 'left', 'auto');
        }
        // set bottom if we use the custom scroll position (bottom => native scrollbar size)
        // only add native scrollbar size if its not hidden
        const bottom = `${(this.overflowX !== PriScrollbarOverflowTypes.hidden ? nativeScrollbarSize : 0) + this._marginsY.bottom}px`;
        const top = `${this._marginsY.top}px`;
        // set left and right depending on the yPosition
        const left = this._yPosition === PriVerticalScrollbarPositions.left ? `${this._marginsY.left}px` : '0px';
        const right = this._yPosition === PriVerticalScrollbarPositions.right ? `${this._marginsY.right}px` : '0px';
        // set styles
        this.renderer.setStyle(this.vertical.nativeElement, 'bottom', bottom);
        this.renderer.setStyle(this.vertical.nativeElement, 'top', top);
        this.renderer.setStyle(this.vertical.nativeElement, 'margin-left', left);
        this.renderer.setStyle(this.vertical.nativeElement, 'margin-right', right);
      }
    }
  }
  /**refresh horizontal scrollbar item*/
  private refreshHorizontalScrollbarItem(nativeScrollbarSize: number, requiresScroll: boolean) {
    // not nec. but better check once more
    if (this.horizontal && this.horizontal.nativeElement) {
      // if the content is not using the full height, we can hide our scroll bar (by setting display: none)
      // better performance for this case compared to ngIf
      if (!requiresScroll) {
        this.renderer.setStyle(this.horizontal.nativeElement, 'display', 'none');
      } else {
        // update vertical scrollbar position
        const scrollBarSize = `${nativeScrollbarSize}px`;
        this.renderer.setStyle(this.horizontal.nativeElement, 'display', 'block');
        // position is top
        if (this._xPosition === PriHorizontalScrollbarPositions.top) {
          this.renderer.setStyle(this.horizontal.nativeElement, 'bottom', 'auto');
          this.renderer.setStyle(this.horizontal.nativeElement, 'top', '0');
        } else {
          this.renderer.setStyle(this.horizontal.nativeElement, 'bottom', scrollBarSize);
          this.renderer.setStyle(this.horizontal.nativeElement, 'top', 'auto');
        }
        // set bottom if we use the custom scroll position (bottom => native scrollbar size)
        // only add native scrollbar size if its not hidden
        const right = `${(this.overflowY !== PriScrollbarOverflowTypes.hidden ? nativeScrollbarSize : 0) + this._marginsX.right}px`;
        const left = `${this._marginsX.left}px`;
        // set left and right depending on the yPosition
        const top = this._xPosition === PriHorizontalScrollbarPositions.top ? `${this._marginsX.top}px` : '0px';
        const bottom = this._xPosition === PriHorizontalScrollbarPositions.bottom ? `${this._marginsX.bottom}px` : '0px';
        // set styles
        this.renderer.setStyle(this.horizontal.nativeElement, 'margin-bottom', bottom);
        this.renderer.setStyle(this.horizontal.nativeElement, 'margin-top', top);
        this.renderer.setStyle(this.horizontal.nativeElement, 'left', left);
        this.renderer.setStyle(this.horizontal.nativeElement, 'right', right);
      }
    }
  }
  /**refresh vertical thumb*/
  private refreshVerticalThumb(nativeScrollbarSize: number) {
    // we use the scrollbar item as base, not the container, bec the scrollbar height is reduced by the horizontal scrollbar height
    const fullScrollbarHeight = (this.vertical.nativeElement as HTMLElement).clientHeight;
    // relation fac between visible height and full height
    const relFac = fullScrollbarHeight / this._scrollableNative.scrollHeight;
    const thumbTop = this._scrollableNative.scrollTop * relFac;
    const thumbBot = (this._scrollableNative.scrollTop + fullScrollbarHeight + nativeScrollbarSize) * relFac;
    const thumbHeight = thumbBot - thumbTop;
    this.renderer.setStyle(this.verticalThumb.nativeElement, 'margin-top', `${thumbTop}px`);
    this.renderer.setStyle(this.verticalThumb.nativeElement, 'height', `${thumbHeight}px`);
  }
  /**refresh horizontal thumb*/
  private refreshHorizontalThumb(nativeScrollbarSize: number) {
    const fullScrollbarWidth = (this.horizontal.nativeElement as HTMLElement).clientWidth;
    const relFach = fullScrollbarWidth / this._scrollableNative.scrollWidth;
    const thumbLeft = this._scrollableNative.scrollLeft * relFach;
    const thumbRight = (this._scrollableNative.scrollLeft + fullScrollbarWidth + nativeScrollbarSize) * relFach;
    const thumbWidth = thumbRight - thumbLeft;
    this.renderer.setStyle(this.horizontalThumb.nativeElement, 'margin-left', `${thumbLeft}px`);
    this.renderer.setStyle(this.horizontalThumb.nativeElement, 'width', `${thumbWidth}px`);
  }
  /**
   * refresh horizontal mouse event
   * @param horizontalThumb refresh mouse events stuff for horizontal thumb
   * */
  private refreshMouseEvents(horizontalThumb: boolean) {
    // not rly necessary but we will unsubscribe the old mousedown events to prevent double
    // event triggering (ok seems we dont trust the browsers :)
    if (horizontalThumb) {
      this._horizontalMouseDownSub.unsubscribe();
    } else {
      this._verticalMouseDownSub.unsubscribe();
    }
    // just a little helper
    const thumb = horizontalThumb ? this.horizontalThumb : this.verticalThumb;
    let mouseDownSub: Subscription = null;
    // check if thumb element itself is available
    if (thumb && thumb.nativeElement) {
      // initial mouse state
      let mouseState: MouseState = null;
      // i rly dont like having string hardcoded (TODO refactoring)
      const scrollingClass = horizontalThumb ? 'x-scrolling' : 'y-scrolling';
      // we wanna run everything outside of the angular zone, to prevent triggering change detection when scrolling
      this.zone.runOutsideAngular(() => {
        // mouse down
        mouseDownSub = fromEvent(thumb.nativeElement, 'mousedown')
          .subscribe((e: MouseEvent) => {
            // set class to always so thumb no matter if mouse is inside our scroll container
            this.renderer.addClass(this.scrollbarContainer.nativeElement, scrollingClass);
            mouseState = {
              startX: e.clientX,
              startY: e.clientY,
              startScrollTop: this._scrollableNative.scrollTop,
              startScrollLeft: this._scrollableNative.scrollLeft
            };
            // add mouse up
            this._mouseUpSub.unsubscribe();
            this._mouseUpSub = this._documentMouseUp$.subscribe((ev: MouseEvent) => {
              // remove all subs
              this._mouseUpSub.unsubscribe();
              this._mouseMoveSub.unsubscribe();
              this.renderer.removeClass(this.scrollbarContainer.nativeElement, scrollingClass);
              e.preventDefault();
              e.stopPropagation();
            });
            this._mouseMoveSub.unsubscribe();
            this._mouseMoveSub = this._documentMouseMove$.subscribe((me: MouseEvent) => {
              this.scrollOnMouseMove(me, mouseState, !horizontalThumb, horizontalThumb);
              e.preventDefault();
              e.stopPropagation();
            });
            e.preventDefault();
            e.stopPropagation();
          });
      });
    } else {
      mouseDownSub = Subscription.EMPTY;
    }
    // set mousedown sub
    if (horizontalThumb) {
      this._horizontalMouseDownSub = mouseDownSub;
    } else {
      this._verticalMouseDownSub = mouseDownSub;
    }
  }
  /**calculate thumb on mouse move*/
  private scrollOnMouseMove(e: MouseEvent, mouseState: MouseState, scrollY: boolean, scrollX: boolean) {
    // scroll y
    if (scrollY) {
      // distance moved (mouse)
      const yGap = e.clientY - mouseState.startY;
      const fullScrollbarHeight = (this.vertical.nativeElement as HTMLElement).clientHeight;
      // relation fac between visible height and full height
      const relFac = fullScrollbarHeight / this._scrollableNative.scrollHeight;
      // calculate new scroll top
      this.scrollable.scrollTo({
        top: mouseState.startScrollTop + (yGap / relFac)
      });
    }
    // scroll y
    if (scrollX) {
      // distance moved (mouse)
      const yGap = e.clientX - mouseState.startX;
      const fullScrollbarWidth = (this.horizontal.nativeElement as HTMLElement).clientWidth;
      // relation fac between visible height and full height
      const relFac = fullScrollbarWidth / this._scrollableNative.scrollWidth;
      // calculate new scroll top
      this.scrollable.scrollTo({
        left: mouseState.startScrollLeft + (yGap / relFac)
      });
    }
  }
  /**convert to thickness*/
  private convertToThickness(thickness: string): Thickness {
    let result = { top: 0, bottom: 0, left: 0, right: 0};
    if (thickness) {
      // one value for top/bottom/left/right
      const oneValueMatch = /^\s*([0-9]+)\s*$/.exec(thickness);
      // two value match (means first value is top/bottom  and second value is right/left)
      const twoValueMatch = oneValueMatch ? null : /^\s*([0-9]+)\s+([0-9]+)\s*$/.exec(thickness);
      // all values
      const allValuesMatch = twoValueMatch ? null : /^\s*([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s*$/.exec(thickness);
      // create thickness
      if (oneValueMatch) {
        result = { top: +oneValueMatch[1], bottom: +oneValueMatch[1], left: +oneValueMatch[1], right: +oneValueMatch[1]};
      } else if (twoValueMatch) {
        result = { top: +twoValueMatch[1], bottom: +twoValueMatch[1], left: +twoValueMatch[2], right: +twoValueMatch[2]};
      } else if (allValuesMatch) {
        result = { top: +allValuesMatch[1], bottom: +allValuesMatch[3], left: +allValuesMatch[4], right: +allValuesMatch[2]};
      }
    }
    return result;
  }
}

/**scroll state*/
interface PriScrollState {
  showX: boolean;
  showY: boolean;
  nativeScrollbarSize?: number;
  forceContainerRefresh?: boolean;
  forceScrollbarItemRefresh?: boolean;
  xRequiresScroll?: boolean;
  yRequiresScroll?: boolean;
  scrollHeight?: number;
  scrollWidth?: number;
  offsetHeight?: number;
  offsetWidth?: number;
}
/**mouse state*/
interface MouseState {
  startX: number;
  startScrollTop: number;
  startScrollLeft: number;
  startY: number;
}
/**thickness (for margins)*/
interface Thickness {
  top: number;
  bottom: number;
  left: number;
  right: number;
}
