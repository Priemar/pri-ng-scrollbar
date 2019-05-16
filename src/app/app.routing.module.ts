import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {environment} from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  },
  ...(environment.production ? [] :
    [{
      path: 'development',
      loadChildren: './+development/development.module#DevelopmentModule'
    }]
  ),
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
