import {NgModule} from '@angular/core';
import {DevelopmentComponent} from './development.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {DevelopmentRoutingModule} from './development.routing.module';
import {CommonModule} from '@angular/common';
import {PriScrollbarModule} from 'pri-ng-scrollbar';
import {DevelopmentSecondComponent} from './development.second.component';


@NgModule({
  imports: [
    CommonModule,
    DevelopmentRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    PriScrollbarModule
  ],
  declarations: [
    DevelopmentComponent,
    DevelopmentSecondComponent
  ],
})
export class DevelopmentModule {
}
