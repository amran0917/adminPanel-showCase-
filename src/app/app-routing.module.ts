import { ContentComponent } from './content/content.component';
import { AdditemComponent } from './additem/additem.component';
import { CommonComponent } from './common/common.component';
import { TechnologyStackComponent } from './sidebar/technology-stack/technology-stack.component';
import { ConsultancyComponent } from './sidebar/consultancy/consultancy.component';
import { BIComponent } from './sidebar/bi/bi.component';
import { MobileAppComponent } from './sidebar/mobile-app/mobile-app.component';
import { WebAppComponent } from './sidebar/web-app/web-app.component';
import { MonitoringAndEvaluationComponent } from './sidebar/monitoring-and-evaluation/monitoring-and-evaluation.component';
import { GISComponent } from './sidebar/gis/gis.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './sidebar/about/about.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'submit/:id', component: AboutComponent },
  {path: 'gis', component: GISComponent},
  {path: 'M&E', component: MonitoringAndEvaluationComponent},
  {path: 'web-app', component: WebAppComponent},
  {path: 'mobile-app', component: MobileAppComponent},
  {path: 'bi', component: BIComponent},
  {path: 'consultancy', component: ConsultancyComponent},
  {path: 'techstack', component: TechnologyStackComponent},
  {path: 'edit/:id', component: CommonComponent},

  {path: 'addItem', component: AdditemComponent},
  { path: '',  redirectTo:'/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const AppRoutingComponent = [
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
    AdditemComponent
];
