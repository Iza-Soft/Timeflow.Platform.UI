import { Component, OnInit } from '@angular/core';
import { ITimeSheet } from '../../models/timesheet.model';
import { timesheetmock } from 'src/app/mock-factory/timesheet/timesheet-mock';

@Component({
  selector: 'tf-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  public timesheetlist: ITimeSheet[] = timesheetmock.mock;

  constructor() {}

  public ngOnInit(): void {}
}
