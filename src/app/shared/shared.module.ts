import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import * as comp from './components/index';
import { HttpProjectService, NotificationService } from '../services';

@NgModule({
  declarations: [
    comp.IconSvgComponent,
    comp.LabelComponent,
    comp.ButtonCrossEffectComponent,
    comp.ButtonHalfFullerComponent,
    comp.SelectComponent,
  ],
  imports: [CommonModule, BsDropdownModule.forRoot()],
  providers: [BsDropdownConfig, HttpProjectService, NotificationService],
  exports: [
    comp.IconSvgComponent,
    comp.LabelComponent,
    comp.ButtonCrossEffectComponent,
    comp.ButtonHalfFullerComponent,
    comp.SelectComponent,
  ],
})
export class SharedModule {}
