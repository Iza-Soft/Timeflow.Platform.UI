import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITimeSheet } from '../../../models/timesheet.model';
import { DATE_TIME_CONFIG } from 'src/app/config/date-time.config';
import { DateService } from 'src/app/services';

@Component({
  selector: 'tf-timesheet-weekly',
  templateUrl: './timesheet-weekly.component.html',
  styleUrls: ['./timesheet-weekly.component.scss'],
})
export class TimesheetWeeklyComponent implements OnInit {
  @Input() timesheetlist: ITimeSheet[];
  @Input() set setCurrentDate(currentDate: Date) {
    this.date = new Date(currentDate);
    this.selectedDayOfWeek = this.daysOfWeek[currentDate.getDay()];

    this.firstDateOfWeek = this.dateService.getFirstDateOfTheWeek(
      new Date(currentDate)
    );
    this.lastDateOfWeek = this.dateService.getLastDateOfTheWeek(
      new Date(currentDate)
    );
  }
  @Output() setSelectedDate = new EventEmitter<Date>();
  public daysOfWeek: string[] = DATE_TIME_CONFIG.DAYS_OF_WEEK;
  public selectedDayOfWeek: string;
  public firstDateOfWeek: Date;
  public lastDateOfWeek: Date;
  private date: Date;

  constructor(private dateService: DateService) {}

  public ngOnInit(): void {}

  public onSelectDayOfWeek(dayOfWeek: string, index: number) {
    this.selectedDayOfWeek = dayOfWeek;
    this.date = this.dateService.setDateByGivenDayOfWeek(this.date, index);

    this.setSelectedDate.emit(this.date);
    let formatted_date = this.dateService.formattedDate(this.date);

    console.log(formatted_date);
  }
}
