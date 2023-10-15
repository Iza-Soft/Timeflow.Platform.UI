import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import * as comp from './components/index';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [comp.TimesheetComponent, comp.TimesheetWeeklyComponent],
  imports: [CommonModule, TimesheetRoutingModule, SharedModule],
})
export class TimesheetModule {}
