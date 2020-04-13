import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class AuthModule { }
