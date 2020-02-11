import { SidebarServices } from './services/sidebar.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, AppRoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TechupdateComponent } from './techupdate/techupdate.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AppRoutingComponent,
    TechupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SidebarServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
