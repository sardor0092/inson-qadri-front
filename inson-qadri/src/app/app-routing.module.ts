import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRouteAccessGuard } from './core/user-route-access.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [

 

    {
      path: '',
      loadChildren: () =>
        import('./login/public.module').then((m) => m.PublicModule),
    },
    {
      path: 'admin',
      loadChildren: () =>
        import('./admin/admin-module').then((m) => m.AdminModule),
      canActivate: [UserRouteAccessGuard]
    },
    {
      path: 'login',
      loadChildren: () =>
        import('./login/login.module').then((m) => m.LoginModule),
    },
    { path: '**', component: PageNotFoundComponent }
  ]
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
