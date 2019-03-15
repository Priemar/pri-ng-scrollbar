import {Component, ViewEncapsulation} from '@angular/core';
import {PriScrollbarComponent} from '../pri-ng-scrollbar/src/lib/pri.scrollbar.component';

@Component({
  templateUrl: '../pri-ng-scrollbar/src/lib/pri.scrollbar.component.html',
  styleUrls: ['../pri-ng-scrollbar/src/lib/pri.scrollbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PriScrollbarWebComponent extends PriScrollbarComponent {}
