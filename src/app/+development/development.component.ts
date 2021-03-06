import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-development',
  templateUrl: 'development.component.html',
  styleUrls: ['development.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DevelopmentComponent implements AfterViewInit {
  /**constructor*/
  constructor(@Inject(PLATFORM_ID) private _platform: Object, private cd: ChangeDetectorRef) {}

  /**just a helper to check if custom scrollbar is available*/
  @ViewChild('testItem', { static: true }) testItem: ElementRef;
  /**show if custom scrollbar is supported*/
  isCustomScrollbarSupported = false;
  /**dynamic items*/
  dynamicItems = [0, 1];
  dynamicItemsTwo = [0, 1];
  /**parent resize example (scrollbar size)*/
  parentResizeExampleScrollbarSize = 300;
  resizeExampleScrollbarSize = 300;

  /**just a helper to check if change detection fired*/
  get changeDetectionTriggered(): boolean {
    console.log('Change detection triggered');
    return true;
  }

  /**after view init*/
  ngAfterViewInit() {
    // only if not ssr, but nobody should run this demo ssr
    if (isPlatformBrowser(this._platform)) {
      this.isCustomScrollbarSupported = this.testItem.nativeElement.offsetWidth > this.testItem.nativeElement.clientWidth;
      this.cd.detectChanges();
    }
  }

  /**add dynamic item*/
  addDynamicItem(source: number[]) {
    source.push(source.length);
  }
  /**remove dynamic item*/
  removeDynamicItem(source: number[]) {
    return source.slice(0, source.length - 1);
  }
}
