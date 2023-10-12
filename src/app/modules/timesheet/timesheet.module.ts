import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { LabelComponent } from 'src/app/shared/components/label/label.component';

@NgModule({
  declarations: [TimesheetComponent, LabelComponent],
  imports: [CommonModule, TimesheetRoutingModule],
})
export class TimesheetModule {}
