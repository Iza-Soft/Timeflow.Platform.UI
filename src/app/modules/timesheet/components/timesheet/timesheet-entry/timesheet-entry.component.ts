import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ISelectModel } from 'src/app/shared/models/select/select-model';

@Component({
  selector: 'tf-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss'],
})
export class TimesheetEntryComponent implements OnInit {
  @Input() dataSource: ISelectModel[];
  constructor(public bsModalRef: BsModalRef) {}

  public ngOnInit(): void {}

  public closeModal() {
    this.bsModalRef.hide();
  }

  public onSelectProject(selectedItem: ISelectModel[]) {
    console.log(selectedItem);
  }

  public onSelectType(selectedItem: ISelectModel[]) {
    console.log(selectedItem);
  }
}
