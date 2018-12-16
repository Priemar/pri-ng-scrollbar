import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {PriScrollbarComponent} from './pri.scrollbar.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule
  ],
  declarations: [
    PriScrollbarComponent
  ],
  exports: [
    PriScrollbarComponent
  ]
})
export class PriScrollbarModule {}
