import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DevelopmentComponent} from './development.component';
import {DevelopmentSecondComponent} from './development.second.component';
import {DevelopmentThirdComponent} from './development.third.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DevelopmentComponent
  },
  {
    path: 'second',
    pathMatch: 'full',
    component: DevelopmentSecondComponent
  },
  {
    path: 'third',
    pathMatch: 'full',
    component: DevelopmentThirdComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevelopmentRoutingModule { }
