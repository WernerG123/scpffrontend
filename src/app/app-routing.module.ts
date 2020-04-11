import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { LookoutsComponent } from './lookouts/lookouts.component';


const routes: Routes = [
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'lookouts',
    component: LookoutsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
