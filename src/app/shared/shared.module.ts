import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import * as comp from './components/index';
import {
  HttpProjectService,
  NotificationService,
  LoadingService,
} from '../services';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    comp.IconSvgComponent,
    comp.LabelComponent,
    comp.ButtonCrossEffectComponent,
    comp.ButtonHalfFullerComponent,
    comp.SelectComponent,
    comp.LoadingComponent,
  ],
  imports: [CommonModule, FormsModule, BsDropdownModule.forRoot()],
  providers: [
    BsDropdownConfig,
    HttpProjectService,
    NotificationService,
    LoadingService,
  ],
  exports: [
    comp.IconSvgComponent,
    comp.LabelComponent,
    comp.ButtonCrossEffectComponent,
    comp.ButtonHalfFullerComponent,
    comp.SelectComponent,
    comp.LoadingComponent,
    FormsModule,
  ],
})
export class SharedModule {}
