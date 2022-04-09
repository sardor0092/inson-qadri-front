import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RequestComponent } from "../admin/entity/request/request.component";

import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
    {
        path: 'login',
        component: RequestComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class LoginRoutingModule { }