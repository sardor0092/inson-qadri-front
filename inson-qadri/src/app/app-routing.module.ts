import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRouteAccessGuard } from './core/user-route-access.guard';
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
    { path: '**', component: PageNotFoundComponent } ,

    {path: 'dashboard' ,component:DashboardComponent ,canActivate:[]}
  ]
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
