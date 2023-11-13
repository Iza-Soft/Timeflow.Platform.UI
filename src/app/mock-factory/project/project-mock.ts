import { DATE_TIME_CONFIG } from 'src/app/config/date-time.config';
import { ITimeSheet } from 'src/app/modules/timesheet/models/timesheet.model';

class ProjectMock {
  public mock: ITimeSheet[];
  constructor() {
    this.mock = [
      {
        Id: 1,
        ProjectId: 1,
        ContractorId: 1,
        DayOfMonth: new Date().getDate(),
        MonthOfYear: new Date().getMonth(),
        Year: new Date().getFullYear(),
        DayOfWeek: DATE_TIME_CONFIG.DAYS_OF_WEEK[new Date().getDay()],
        Month: DATE_TIME_CONFIG.MONTH_OF_YEAR[new Date().getMonth()],
        WorkingHours: 4,
      },
    ];
  }
}

export const projectmock = new ProjectMock();
