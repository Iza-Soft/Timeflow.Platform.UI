import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import * as comp from './components/index';
import { HttpProjectService } from '../services';

@NgModule({
  declarations: [
    comp.IconSvgComponent,
    comp.LabelComponent,
    comp.ButtonCrossEffectComponent,
    comp.ButtonHalfFullerComponent,
    comp.SelectComponent,
  ],
  imports: [CommonModule, BsDropdownModule.forRoot()],
  providers: [BsDropdownConfig, HttpProjectService],
  exports: [
    comp.IconSvgComponent,
    comp.LabelComponent,
    comp.ButtonCrossEffectComponent,
    comp.ButtonHalfFullerComponent,
    comp.SelectComponent,
  ],
})
export class SharedModule {}
