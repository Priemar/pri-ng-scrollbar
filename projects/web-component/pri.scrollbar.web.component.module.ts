import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PriScrollbarWebComponent} from './pri.scrollbar.web.component';
import {createCustomElement} from '@angular/elements';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {PriScrollbarComponent} from '../pri-ng-scrollbar/src/lib/pri.scrollbar.component';

@NgModule({
  imports: [
    ScrollingModule,
    BrowserModule
  ],
  declarations: [
    PriScrollbarComponent,
    PriScrollbarWebComponent
  ],
  entryComponents: [
    PriScrollbarWebComponent
  ]
})
export class PriScrollbarWebComponentModule implements DoBootstrap {
  /** constructor */
  constructor(injector: Injector) {
    const customElement = createCustomElement(PriScrollbarWebComponent, { injector });
    customElements.define('pri-scrollbar', customElement);
  }
  /** do bootstrap */
  ngDoBootstrap(appRef: ApplicationRef): void {}
}
