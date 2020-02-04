import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./employees/employee-list/EmployeeListComponent";



const routes: Routes = [
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'employee-delete',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
