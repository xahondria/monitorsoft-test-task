import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { UsersComponent } from './users/users.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkmenComponent } from './workmen/workmen.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    UsersComponent,
    UserCreatorComponent,
    NavigationComponent,
    WorkmenComponent
  ],
  entryComponents: [UserCreatorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
