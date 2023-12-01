import { Component, OnInit } from '@angular/core';
import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';
import { TimesheetEntryComponent } from '../../timesheet-entry/timesheet-entry.component';
import { HttpProjectService, ProjectService } from 'src/app/services';
import { authmock } from 'src/app/mock-factory/auth/auth-mock';
import { ISelectModel } from 'src/app/shared/models/select/select-model';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'tf-timesheet-weekly-content',
  templateUrl: './timesheet-weekly-content.component.html',
  styleUrls: ['./timesheet-weekly-content.component.scss'],
})
export class TimesheetWeeklyContentComponent implements OnInit {
  public isLoading: boolean = false;
  constructor(
    private modalService: BsModalService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  public onCallModal() {
    // this.isLoading = true;

    const modalOptions: ModalOptions = {};
    modalOptions.backdrop = 'static';
    modalOptions.animated = true;
    modalOptions.initialState = {
      dataSource: this.projectService.setProjectsToSelectModel(),
    };
    const modalRef = this.modalService.show(
      TimesheetEntryComponent,
      modalOptions
    );

    //     modalRef.content?.onClose.subscribe((result) => {
    //       console.log('results', result);
    //     });
    //     modalRef.content?.onClose1.subscribe((result) => {
    //       console.log('results 1', result);
    //     });
  }
}
