import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModules } from '../core/material';


@NgModule({
  declarations: [
    WrapperComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    MaterialModules
  ]
})
export class WrapperModule { }
