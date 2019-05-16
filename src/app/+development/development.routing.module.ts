import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DevelopmentComponent} from './development.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DevelopmentComponent
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
