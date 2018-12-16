import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PriScrollbarModule} from 'pri-ng-scrollbar';

@NgModule({
  imports: [
    BrowserModule,
    PriScrollbarModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
