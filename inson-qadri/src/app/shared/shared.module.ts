
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material/material.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTab } from "./roter-tab/roter-tab.directive";
import { RouterTabs } from "./roter-tab/router-tabs.directive";

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [
    PageNotFoundComponent, RouterTabs, RouterTab


  ],

  exports: [
    CommonModule,
    PageNotFoundComponent,
    RouterTabs,
    RouterTab,




  ]
})



export class SharedModule { }