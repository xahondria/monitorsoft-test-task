import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { UsersComponent } from './users/users.component';
import { WorkmanCreatorComponent } from './workman-creator/workman-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkmenComponent } from './workmen/workmen.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    UsersComponent,
    WorkmanCreatorComponent,
    NavigationComponent,
    WorkmenComponent,
  ],
  entryComponents: [WorkmanCreatorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
