import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import * as comp from './components/index';

@NgModule({
  declarations: [
    comp.TimesheetComponent,
    comp.LabelComponent,
    comp.TimesheetWeeklyComponent,
    comp.IconSvgComponent,
  ],
  imports: [CommonModule, TimesheetRoutingModule],
})
export class TimesheetModule {}
