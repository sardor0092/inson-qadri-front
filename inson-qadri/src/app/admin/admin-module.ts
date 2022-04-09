import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material/material.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { TashkilotComponent } from "./entity/tashkilot/tashkilot.component";

@NgModule({
    declarations:[

      TashkilotComponent
     
       
      
  
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