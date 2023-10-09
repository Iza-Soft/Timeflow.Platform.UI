import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetRoutingModule } from './timesheet-routing.module';
import { ActionComponent } from './components/action/action.component';


@NgModule({
  declarations: [
    ActionComponent
  ],
  imports: [
    CommonModule,
    TimesheetRoutingModule
  ]
})
export class TimesheetModule { }
