import { Component, Input, OnInit } from '@angular/core';
import { ITimeSheet } from '../../../models/timesheet.model';
import { DATE_TIME_CONFIG } from 'src/app/config/date-time.config';

@Component({
  selector: 'tf-timesheet-weekly',
  templateUrl: './timesheet-weekly.component.html',
  styleUrls: ['./timesheet-weekly.component.scss'],
})
export class TimesheetWeeklyComponent implements OnInit {
  @Input() timesheetlist: ITimeSheet[];

  public daysOfWeek: string[] = DATE_TIME_CONFIG.DAYS_OF_WEEK;
  public selectedDayOfWeek: string;
  constructor() {}

  public ngOnInit(): void {}

  public onSelectDayOfWeek(dayOfWeek: string) {
    this.selectedDayOfWeek = dayOfWeek;
  }
}
