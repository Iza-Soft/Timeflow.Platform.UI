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

  public setDateByGivenDayOfWeek(date: Date, dayOfWeek: number) {
    return new Date(date.setDate(date.getDate() - (date.getDay() - dayOfWeek)));
  }

  public formattedDate(date: Date, format?: string) {
    return formatDate(date, format ? format : this.format, this.locale);
  }
}
