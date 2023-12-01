import {
  Component,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  Output,
} from '@angular/core';
import { ITimeSheet } from '../../../models/timesheet.model';
import { DATE_TIME_CONFIG } from 'src/app/config/date-time.config';
import { DateService } from 'src/app/services';
import { formatDate } from '@angular/common';

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
  @Output() setDaysOfWeek = new EventEmitter<number>();
  public daysOfWeek: string[] = DATE_TIME_CONFIG.DAYS_OF_WEEK;
  public selectedDayOfWeek: string;
  public firstDateOfWeek: Date;
  public lastDateOfWeek: Date;
  private format: string = 'MM-dd-yyyy';
  private date: Date;

  constructor(
    private dateService: DateService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  public ngOnInit(): void {}

  public onSelectDayOfWeek(dayOfWeek: string) {
    this.selectedDayOfWeek = dayOfWeek;

    // let firsDayOfWeek: Date = this.dateService.getFirstDateOfTheWeek(
    //   new Date(this._date)
    // );
    // this.setDaysOfWeek.emit(index);
    // console.log(
    //   formatDate(
    //     new Date(firsDayOfWeek.setDate(firsDayOfWeek.getDate() + index)),
    //     this.format,
    //     this.locale
    //   )
    // );
  }
}
