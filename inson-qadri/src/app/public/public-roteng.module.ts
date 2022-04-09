import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../login/register/register.component";

const routes: Routes = [

    {
  
      path: '' , redirectTo: '/login', pathMatch: 'full'},
  
    {
      
      path: 'login',
      component: LoginComponent,
      data: { icon: 'login', text: "Login oynasi" }
  
    },
    
    {
    path: 'register',
    component: RegisterComponent,
    data: { icon: 'login', text: "register oynasi" }

  },
  ];




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class PublicRoutingModule { }