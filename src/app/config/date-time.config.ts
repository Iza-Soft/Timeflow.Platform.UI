class DateTimeConfig {
  readonly DAYS_OF_WEEK: string[];
  readonly MONTH_OF_YEAR: string[];

  constructor() {
    this.DAYS_OF_WEEK = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    this.MONTH_OF_YEAR = [
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
  }
}

const config = new DateTimeConfig();

export const DATE_TIME_CONFIG = config;
