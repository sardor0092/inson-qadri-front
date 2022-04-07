import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-roteng.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,

  ],
  bootstrap: [LoginComponent,RegisterComponent]
})
export class PublicModule { }