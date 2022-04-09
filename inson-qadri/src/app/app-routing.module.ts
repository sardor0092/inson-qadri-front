import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRouteAccessGuard } from './core/user-route-access.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [

    {
      path: '',
      loadChildren: () =>
        import('./public/public.module').then((m) => m.PublicModule),
    },

    {
      path: 'login',
      loadChildren: () =>
        import('./public/login/login.module').then((m) => m.LoginModule),
    },
    { path: '**', component: PageNotFoundComponent }
  ]
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
