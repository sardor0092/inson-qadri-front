import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";




import { UserRouteAccessGuard } from "../core/user-route-access.guard";
import { Lavozim } from "../shared/model/Lavozim";
import { UserComponent } from "./entity/user/user.component";

const routes: Routes = [
  {
   
        path: '',
        redirectTo: ""
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [UserRouteAccessGuard],
        data:{
          authorities: [Lavozim.ADMIN, Lavozim.ADMIN]
        }
      },
      
      // {path:'user' ,component:UserComponent ,canActivate:[UserRouteAccessGuard]},




    ]
  






@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  
  })


export class AdminRoutingModule { }