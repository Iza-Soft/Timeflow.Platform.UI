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
  public showFilledUndoIcon: boolean = true;
  public showFilledRedoIcon: boolean = true;
  public currentDate: Date = new Date();

  constructor() {}

  public ngOnInit(): void {}

  public onMouseEnter(icon: string) {
    if (icon.includes('undo')) this.showFilledUndoIcon = false;
    if (icon.includes('redo')) this.showFilledRedoIcon = false;
  }

  public onMouseLeave(icon: string) {
    if (icon.includes('undo')) this.showFilledUndoIcon = true;
    if (icon.includes('redo')) this.showFilledRedoIcon = true;
  }

  public setDaysOfWeek(index: number) {
    //this.dayOfWeek = this.dayOfWeek + index;
  }

  public onForward() {
    this.currentDate = new Date(
      this.currentDate.setDate(this.currentDate.getDate() + 1)
    );
  }

  public onBackward() {
    this.currentDate = new Date(
      this.currentDate.setDate(this.currentDate.getDate() - 1)
    );
  }
}
