import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WorkmenComponent } from './workmen/workmen.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { UsersGuard } from './auth/guards/users.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent, canActivate: [ AuthGuard ] },
  { path: 'users', component: UsersComponent, canActivate: [ UsersGuard ], canLoad: [ UsersGuard ] },
  { path: 'workmen', component: WorkmenComponent, canActivate: [ UsersGuard ], canLoad: [ UsersGuard ] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
