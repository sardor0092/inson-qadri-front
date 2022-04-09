import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserRouteAccessGuard } from "../core/user-route-access.guard";
import { Lavozim } from "../shared/model/Lavozim";
import { TashkilotComponent } from "./entity/tashkilot/tashkilot.component";
import { UserComponent } from "./entity/user/user.component";

const routes: Routes = [
  {
   
        path: 'tashkilot',
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
      
      { path:'tashkilot' ,component:TashkilotComponent},


    ]
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  
  })


export class AdminRoutingModule { }