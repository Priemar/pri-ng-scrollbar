import {NgModule} from '@angular/core';
import {DevelopmentComponent} from './development.component';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {DevelopmentRoutingModule} from './development.routing.module';
import {CommonModule} from '@angular/common';
import {PriScrollbarModule} from 'pri-ng-scrollbar';


@NgModule({
  imports: [
    CommonModule,
    DevelopmentRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    PriScrollbarModule
  ],
  declarations: [DevelopmentComponent],
})
export class DevelopmentModule {
}
