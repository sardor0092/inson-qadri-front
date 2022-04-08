import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../login/register/register.component";
import { MaterialModule } from "../shared/material/material.module";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    declarations:[
      LoginComponent,
      RegisterComponent
       
      
  
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