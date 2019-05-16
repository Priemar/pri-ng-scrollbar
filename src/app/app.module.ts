import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PriScrollbarModule} from 'pri-ng-scrollbar';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './main/main.component';
import {AppRoutingModule} from './app.routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {IconModule} from './common/+icon/icon.module';
import {FormsModule} from '@angular/forms';
import {EnumKeysPipe} from './common/pipes/enum.keys.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PriScrollbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    IconModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    EnumKeysPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
