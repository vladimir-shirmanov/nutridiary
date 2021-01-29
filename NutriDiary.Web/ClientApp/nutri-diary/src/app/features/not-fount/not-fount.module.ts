import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFountRoutingModule } from './not-fount-routing.module';
import { NotFountComponent } from './not-fount.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [NotFountComponent],
  imports: [
    CommonModule,
    NotFountRoutingModule,
    MatButtonModule
  ]
})
export class NotFountModule { }
