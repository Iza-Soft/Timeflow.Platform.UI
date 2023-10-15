import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as comp from './components/index';

@NgModule({
  declarations: [
    comp.IconSvgComponent,
    comp.LabelComponent,
    comp.ButtonCrossEffectComponent,
    comp.ButtonHalfFullerComponent,
  ],
  imports: [CommonModule],
  exports: [
    comp.IconSvgComponent,
    comp.LabelComponent,
    comp.ButtonCrossEffectComponent,
    comp.ButtonHalfFullerComponent,
  ],
})
export class SharedModule {}
