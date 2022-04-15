import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AuthInterceptor } from './shared/auth-interceptor';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { TashkilotComponent } from './user/tashkilot/tashkilot.component';
import { ArizaComponent } from './user/ariza/ariza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TadbirkorComponent } from './user/tadbirkor/tadbirkor.component';
import { MahallaComponent } from './user/mahalla/mahalla.component';
import { ViloyatComponent } from './user/viloyat/viloyat.component';
import { FoyadalilinkComponent } from './user/foyadalilink/foyadalilink.component';
import { KutubxonaComponent } from './user/kutubxona/kutubxona.component';
import { TaminotchiComponent } from './user/taminotchi/taminotchi.component';
import { TadbirkorSubyektComponent } from './user/tadbirkor-subyekt/tadbirkor-subyekt.component';
import { MenyuComponent } from './user/menyu/menyu.component';
import { HokimYordamComponent } from './user/hokim-yordam/hokim-yordam.component';
import { TashkilotArizaComponent } from './user/tashkilot-ariza/tashkilot-ariza.component';
import { ProfilComponent } from './user/profil/profil.component';
import { HomeComponent } from './public/home/home.component';
import { BisnesNamunaComponent } from './user/tadbirkor/bisnes-namuna/bisnes-namuna.component';

@NgModule({
  declarations: [
    AppComponent,
    
    TashkilotComponent,
    ArizaComponent,
    TadbirkorComponent,
    MahallaComponent,
    ViloyatComponent,
    FoyadalilinkComponent,
    KutubxonaComponent,
    TaminotchiComponent,
    TadbirkorSubyektComponent,
    MenyuComponent,
    HokimYordamComponent,
    TashkilotArizaComponent,
    ProfilComponent,
    DashboardComponent,
    BisnesNamunaComponent
        
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,    
    CoreModule,
    SharedModule,
  ],
  providers: [


    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
