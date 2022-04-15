import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-roteng.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [
   HomeComponent,


  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,

  ],
  bootstrap: [HomeComponent]
   
  
})
export class PublicModule { }