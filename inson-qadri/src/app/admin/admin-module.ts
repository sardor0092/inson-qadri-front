import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../shared/material/material.module";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    declarations:[
    
       
      
  
    ],
    imports: [
       
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
})

export class AdminModule{}