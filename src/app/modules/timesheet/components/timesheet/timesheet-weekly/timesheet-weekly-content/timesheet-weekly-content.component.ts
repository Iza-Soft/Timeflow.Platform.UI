import { Component } from '@angular/core';
import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'tf-timesheet-weekly-content',
  templateUrl: './timesheet-weekly-content.component.html',
  styleUrls: ['./timesheet-weekly-content.component.scss'],
})
export class TimesheetWeeklyContentComponent {
  constructor(private modalService: BsModalService) {}

  public onCallModal() {
    const modalOptions: ModalOptions = {};
    modalOptions.backdrop = 'static';
    modalOptions.animated = true;
    modalOptions.class = 'modal-lg';
    this.modalService.show(TimesheetWeeklyContentComponent, modalOptions);
  }
}
