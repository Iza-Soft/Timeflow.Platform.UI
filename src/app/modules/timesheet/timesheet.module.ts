import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import * as comp from './components/index';

@NgModule({
  declarations: [
    comp.TimesheetComponent,
    comp.TimesheetWeeklyComponent,
    comp.TimesheetWeeklyContentComponent,
  ],
  imports: [CommonModule, TimesheetRoutingModule, SharedModule],
})
export class TimesheetModule {}
