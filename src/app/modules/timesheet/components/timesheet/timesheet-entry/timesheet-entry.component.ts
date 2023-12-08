import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { SERVICE_TYPE_CONFIG } from 'src/app/config/service-type.config';
import { ISelectModel } from 'src/app/shared/models/select/select-model';

@Component({
  selector: 'tf-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.scss'],
})
export class TimesheetEntryComponent implements OnInit {
  @Input() dataSource: ISelectModel[];
  public ServiceTypes: { Id: number; Title: string }[];
  public onClose = new Subject();
  public onClose1 = new EventEmitter<boolean>();

  constructor(public bsModalRef: BsModalRef) {
    // https://copyprogramming.com/howto/ngx-bootstrap-modal-access-data-passed-into-modal-via-bsmodalref-content
  }

  public ngOnInit(): void {
    this.ServiceTypes = [
      { Id: 1, Title: SERVICE_TYPE_CONFIG.BILLABLE },
      { Id: 2, Title: SERVICE_TYPE_CONFIG.NON_BILLABLE },
    ];
  }

  public closeModal() {
    this.bsModalRef.hide();
    this.onClose.next(true);
    this.onClose1.emit(true);
  }

  public onSelectProject(selectedItem: ISelectModel[]) {
    console.log(selectedItem);
  }

  public onSelectServiceType(selectedItem: ISelectModel[]) {
    console.log(selectedItem);
  }
}
