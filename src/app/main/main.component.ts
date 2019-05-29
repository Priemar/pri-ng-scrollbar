import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {PriScrollbarOverflowTypes, PriVerticalScrollbarPositions} from 'pri-ng-scrollbar';
import {BehaviorSubject} from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

enum ScrollbarThemes {
  default = 'default',
  purple = 'purple',
  trans = 'trans'
}

interface Settings {
  overflowY: PriScrollbarOverflowTypes;
  yPosition: PriVerticalScrollbarPositions;
  marginsY: string;
  yValuesEnabled: boolean;
  theme: ScrollbarThemes;
}

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements AfterViewInit, OnDestroy {

  /**
   * constructor
   * @param cd change detection ref
   */
  constructor(private cd: ChangeDetectorRef) {
    this.settings$ = new BehaviorSubject<Settings>({
      marginsY: '10 5',
      overflowY: PriScrollbarOverflowTypes.auto,
      yPosition: PriVerticalScrollbarPositions.right,
      yValuesEnabled: true,
      theme: ScrollbarThemes.default
    });
  }

  /**just a helper to check if custom scrollbar is available*/
  @ViewChild('testItem', { static: true }) testItem: ElementRef;

  /**
   * purple theme
   */
  @HostBinding('class.purple-theme') purpleTheme = false;

  /**
   * trans theme
   */
  @HostBinding('class.trans-theme') transTheme = false;

  /**state*/
  readonly settings$: BehaviorSubject<Settings>;

  /**show if custom scrollbar is supported*/
  isSupported = false;

  /**
   * overflow types
   */
  overflowTypes = PriScrollbarOverflowTypes;

  /**
   * vertical positions
   */
  verticalPositions = PriVerticalScrollbarPositions;

  /**
   * themes
   */
  themes = ScrollbarThemes;

  /**after view init*/
  ngAfterViewInit() {
    // only if not ssr, but nobody should run this demo ssr
    this.isSupported = this.testItem && this.testItem.nativeElement &&
      this.testItem.nativeElement.offsetWidth > this.testItem.nativeElement.clientWidth;
    this.cd.detectChanges();
  }

  /**
   * destroy
   */
  ngOnDestroy(): void {
    this.settings$.complete();
  }

  /**
   * overflow changed
   * @param event changed event
   */
  overflowChanged(event: MatSelectChange) {
    this.settings$.next({
      ...this.settings$.value,
      overflowY: event.value,
      yValuesEnabled: event.value === PriScrollbarOverflowTypes.auto || event.value === PriScrollbarOverflowTypes.scroll
    });
  }

  /**
   * overflow changed
   * @param event changed event
   */
  verticalPositionChanged(event: MatSelectChange) {
    this.settings$.next({
      ...this.settings$.value,
      yPosition: event.value
    });
  }

  /**
   * margins y changed
   * @param newValue new value
   */
  marginsYChanged(newValue: string) {
    this.settings$.next({
      ...this.settings$.value,
      marginsY: newValue
    });
  }

  /**
   * theme changed
   * @param newValue new value
   */
  themeChanged(event: MatSelectChange) {
    this.settings$.next({
      ...this.settings$.value,
      theme: event.value
    });
    this.transTheme = event.value === ScrollbarThemes.trans;
    this.purpleTheme = event.value === ScrollbarThemes.purple;
    this.cd.markForCheck();
  }

}
