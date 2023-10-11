import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './components/timesheet/timesheet.component';

@NgModule({
  declarations: [TimesheetComponent],
  imports: [CommonModule, TimesheetRoutingModule],
})
export class TimesheetModule {}
