import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ArizaComponent } from './user/ariza/ariza.component';
import { HokimYordamComponent } from './user/hokim-yordam/hokim-yordam.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { FoyadalilinkComponent } from './user/foyadalilink/foyadalilink.component';
import { KutubxonaComponent } from './user/kutubxona/kutubxona.component';
import { MahallaComponent } from './user/mahalla/mahalla.component';
import { MenyuComponent } from './user/menyu/menyu.component';
import { TadbirkorSubyektComponent } from './user/tadbirkor-subyekt/tadbirkor-subyekt.component';
import { TadbirkorComponent } from './user/tadbirkor/tadbirkor.component';
import { ViloyatComponent } from './user/viloyat/viloyat.component';
import { TashkilotArizaComponent } from './user/tashkilot-ariza/tashkilot-ariza.component';
import { ProfilComponent } from './user/profil/profil.component';
import { TashkilotComponent } from './user/tashkilot/tashkilot.component';
import { TaminotchiComponent } from './user/taminotchi/taminotchi.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./public/login/public.module').then((m) => m.PublicModule),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./public/login/login.module').then((m) => m.LoginModule),


  },

  {
    path: 'user', component: DashboardComponent,
    
    children: [
      { path: 'ariza', component: ArizaComponent },
      { path: 'tadbirkor', component: TadbirkorComponent },
      { path: 'mahalla', component: MahallaComponent },
      { path: 'viloyat', component: TashkilotComponent },
      { path: 'havola', component: FoyadalilinkComponent },
      { path: 'kutubxona', component: KutubxonaComponent },
      { path: 'subyekt', component: TadbirkorSubyektComponent },
      { path: 'taminot', component: TaminotchiComponent },
      {path:  'menyu' ,component:MenyuComponent},
       {path : 'hokimyordam',component:HokimYordamComponent},
       {path: 'tashkilotariza',component:TashkilotArizaComponent},
       {path:'profil' ,component:ProfilComponent}
    ]
  },
  

  { path: '**', component: PageNotFoundComponent },





]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
