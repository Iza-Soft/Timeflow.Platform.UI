import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'tf-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss'],
})
export class TimesheetEntryComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) {}

  public ngOnInit(): void {}

  public closeModal() {
    this.bsModalRef.hide();
  }
}
