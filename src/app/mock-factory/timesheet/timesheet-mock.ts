import { ITimeSheet } from 'src/app/modules/timesheet/models/timesheet.model';

class TimesheetMock {
  public mock: ITimeSheet[];
  private months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  private days: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  constructor() {
    this.mock = [
      {
        Id: 1,
        ProjectId: 1,
        ContractorId: 1,
        DayOfMonth: new Date().getDate(),
        MonthOfYear: new Date().getMonth(),
        Year: new Date().getFullYear(),
        DayOfWeek: this.days[new Date().getDay()],
        Month: this.months[new Date().getMonth()],
        WorkingHours: 4,
      },
    ];
  }
}

export const timesheetmock = new TimesheetMock();
