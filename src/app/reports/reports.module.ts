import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IncidentsComponent } from './incidents/incidents.component';



@NgModule({
  declarations: [ReportsComponent, IncidentsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ReportsModule { }
