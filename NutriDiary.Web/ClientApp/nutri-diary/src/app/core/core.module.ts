import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import {SharedModule} from "../shared/shared.module";

import * as components from './components';


@NgModule({
  declarations: [...components.components],
  imports: [
    SharedModule,
    MatToolbarModule
  ],
  exports: [
    ...components.components
  ]
})
export class CoreModule { }
