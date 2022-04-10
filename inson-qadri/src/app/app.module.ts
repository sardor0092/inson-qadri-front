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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TashkilotComponent,
    ArizaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,    
    CoreModule,
    SharedModule,
    BrowserAnimationsModule
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
