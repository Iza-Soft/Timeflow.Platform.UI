import { Component, OnInit } from '@angular/core';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TimesheetEntryComponent } from '../../timesheet-entry/timesheet-entry.component';
import { ProjectService } from 'src/app/services';

@Component({
  selector: 'tf-timesheet-weekly-content',
  templateUrl: './timesheet-weekly-content.component.html',
  styleUrls: ['./timesheet-weekly-content.component.scss'],
})
export class TimesheetWeeklyContentComponent implements OnInit {
  constructor(
    private modalService: BsModalService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {}

  public async onCallModal() {
    const modalOptions: ModalOptions = {};
    modalOptions.backdrop = 'static';
    modalOptions.animated = true;
    modalOptions.initialState = {
      dataSource: await this.projectService.setProjectsToSelectModel(),
    };
    const modalRef = this.modalService.show(
      TimesheetEntryComponent,
      modalOptions
    );

    modalRef.content?.onClose.subscribe((result) => {
      console.log('results', result);
    });
    //     modalRef.content?.onClose1.subscribe((result) => {
    //       console.log('results 1', result);
    //     });
  }
}
