import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SharedModule} from "../shared/shared.module";

import * as components from './components';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [...components.components, MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule,

    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    ...components.components,
    MainLayoutComponent
  ]
})
export class CoreModule {
}
