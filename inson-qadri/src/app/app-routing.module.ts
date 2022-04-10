import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';

const routes: Routes = [

    {
      path: '',
      loadChildren: () =>
        import('./public1/public.module').then((m) => m.PublicModule),
    },

    {
      path: 'login',
      loadChildren: () =>
        import('./public/login/login.module').then((m) => m.LoginModule),

        
    },
    {path: 'dashboard' ,component:DashboardComponent ,canActivate:[]},
    { path: '**', component: PageNotFoundComponent } ,

    

    
  ]
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
