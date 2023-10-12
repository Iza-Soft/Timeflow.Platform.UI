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
}
