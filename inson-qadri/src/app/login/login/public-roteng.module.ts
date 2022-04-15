import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [

    {
  
      
      path: '', 
      redirectTo: '/home', pathMatch: 'full'},
  
    {
      
      path: 'home',
    component: HomeComponent,
    data: { icon: 'home', text: "Bosh sahifa" }
  
    },
    
  

  
  ];




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class PublicRoutingModule { }