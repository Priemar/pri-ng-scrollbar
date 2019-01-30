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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

  /**construcotr*/
  constructor(@Inject(PLATFORM_ID) private _platform: Object, private cd: ChangeDetectorRef) {}
  /**just a helper to check if custom scrollar is available*/
  @ViewChild('testItem') testItem: ElementRef;
  /**show if custom scrollbar is supported*/
  isCustomScrollbarSupported = false;
  /**dynamic items*/
  dynamicItems = [0, 1];

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
  addDynamicItem() {
    this.dynamicItems.push(this.dynamicItems.length);
  }
  /**remove dynamic item*/
  removeDynamicItem() {
    this.dynamicItems = this.dynamicItems.slice(0, this.dynamicItems.length - 1);
  }
}
