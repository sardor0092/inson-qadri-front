import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "src/app/shared/material/material.module";
import { LoginRoutingModule } from "./login-router.module";

@NgModule({
    declarations: [ ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        LoginRoutingModule,
        
        
        
    ]
})


export class LoginModule { }