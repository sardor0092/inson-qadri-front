import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "src/app/user/dashboard/dashboard.component";

import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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