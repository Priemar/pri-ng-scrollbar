import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PriScrollbarModule} from 'pri-ng-scrollbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
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
