import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "src/app/shared/material/material.module";
import { DashboardComponent } from "src/app/user/dashboard/dashboard.component";
import { LoginRoutingModule } from "./login-router.module";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [ LoginComponent,RegisterComponent],
        
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        LoginRoutingModule,
        
    ]
})


export class LoginModule { }