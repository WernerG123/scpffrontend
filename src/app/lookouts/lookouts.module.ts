import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookoutsComponent } from './lookouts.component';
import { MaterialModule } from '../material/material.module';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PersonsComponent } from './persons/persons.component';
import { GeneralComponent } from './general/general.component';



@NgModule({
  declarations: [LookoutsComponent, VehiclesComponent, PersonsComponent, GeneralComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LookoutsModule { }
