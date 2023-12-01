import { formatDate } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private daysOfWeek: number = 6;
  private format: string = 'MM-dd-yyyy';

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  public getFirstDateOfTheWeek(date: Date) {
    date.setDate(date.getDate() - date.getDay());
    return date;
  }

  public getLastDateOfTheWeek(date: Date) {
    date.setDate(date.getDate() + (this.daysOfWeek - date.getDay()));
    return date;
  }

  // public getCalculatedDate(dayOfWeek: number) {
  //   let format_date: Date = this.getFirstDateOfTheWeek(new Date());

  //   return formatDate(
  //     new Date(format_date.setDate(format_date.getDate() + dayOfWeek)),
  //     this.format,
  //     this.locale
  //   );
  // }
}
