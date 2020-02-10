import { SidebarServices } from './services/sidebar.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './sidebar/about/about.component';
import { GISComponent } from './sidebar/gis/gis.component';
import { MonitoringAndEvaluationComponent } from './sidebar/monitoring-and-evaluation/monitoring-and-evaluation.component';
import { WebAppComponent } from './sidebar/web-app/web-app.component';
import { MobileAppComponent } from './sidebar/mobile-app/mobile-app.component';
import { BIComponent } from './sidebar/bi/bi.component';
import { ConsultancyComponent } from './sidebar/consultancy/consultancy.component';
import { TechnologyStackComponent } from './sidebar/technology-stack/technology-stack.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ContentComponent } from './content/content.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonComponent } from './common/common.component';
import { AdditemComponent } from './additem/additem.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AboutComponent,
    GISComponent,
    MonitoringAndEvaluationComponent,
    WebAppComponent,
    MobileAppComponent,
    BIComponent,
    ConsultancyComponent,
    TechnologyStackComponent,
    ContentComponent,
    CommonComponent,
    AdditemComponent,
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
