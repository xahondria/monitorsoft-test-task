import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { MaterialModule } from './material/material.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { UsersComponent } from './users/users.component';
import { WorkmanCreatorComponent } from './workman-creator/workman-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkmenComponent } from './workmen/workmen.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './auth/token.interceptor';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [

    AppComponent,
    AuthComponent,
    AuthFormComponent,
    MessagesComponent,
    UsersComponent,
    WorkmanCreatorComponent,
    NavigationComponent,
    WorkmenComponent,
    HeaderComponent,
  ],
  entryComponents: [
    WorkmanCreatorComponent,
    AuthFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    LoadingBarHttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
