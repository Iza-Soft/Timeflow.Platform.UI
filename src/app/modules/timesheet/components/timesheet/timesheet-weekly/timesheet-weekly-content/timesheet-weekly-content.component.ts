import { Component, OnInit } from '@angular/core';
import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';
import { TimesheetEntryComponent } from '../../timesheet-entry/timesheet-entry.component';
import { HttpProjectService } from 'src/app/services';
import { authmock } from 'src/app/mock-factory/auth/auth-mock';

@Component({
  selector: 'tf-timesheet-weekly-content',
  templateUrl: './timesheet-weekly-content.component.html',
  styleUrls: ['./timesheet-weekly-content.component.scss'],
})
export class TimesheetWeeklyContentComponent implements OnInit {
  constructor(
    private modalService: BsModalService,
    private projectService: HttpProjectService
  ) {}

  ngOnInit(): void {
    this.projectService
      .getProjectByUserIdAsync(authmock.mock.userId)
      .subscribe((result) => {
        console.log(result);
      });
  }

  public onCallModal() {
    const modalOptions: ModalOptions = {};
    modalOptions.backdrop = 'static';
    modalOptions.animated = true;
    //modalOptions.class = 'modal-sm';
    this.modalService.show(TimesheetEntryComponent, modalOptions);
  }
}
