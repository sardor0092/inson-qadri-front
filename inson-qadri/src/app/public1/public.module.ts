import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-roteng.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,

  ],
  bootstrap: []
   
  
})
export class PublicModule { }