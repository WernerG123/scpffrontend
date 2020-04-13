import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { LookoutsComponent } from './lookouts/lookouts.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { IncidentsComponent } from './reports/incidents/incidents.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ReportsComponent
  },
  {
    path: 'reports',
    canActivate: [AuthGuard],
    component: ReportsComponent
  },
  {
    path:'incidents/:id',
    canActivate: [AuthGuard],
    component: IncidentsComponent
  }, 
  {
    path: 'lookouts',
    canActivate: [AuthGuard],
    component: LookoutsComponent
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
