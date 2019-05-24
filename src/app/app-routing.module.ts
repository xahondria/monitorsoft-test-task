import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WorkmenComponent } from './workmen/workmen.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'workmen', component: WorkmenComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
