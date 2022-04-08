import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/material/material.module";
import { LoginRoutingModule } from "./login-router.module";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register/register.component";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        LoginRoutingModule,
        
        
        

    ]
})
//  fdgvfdgvfdsgvfdg

export class LoginModule { }