import { Component, OnInit } from '@angular/core';
import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';
import { TimesheetEntryComponent } from '../../timesheet-entry/timesheet-entry.component';
import { HttpProjectService } from 'src/app/services';
import { authmock } from 'src/app/mock-factory/auth/auth-mock';
import { ISelectModel } from 'src/app/shared/models/select/select-model';

@Component({
  selector: 'tf-timesheet-weekly-content',
  templateUrl: './timesheet-weekly-content.component.html',
  styleUrls: ['./timesheet-weekly-content.component.scss'],
})
export class TimesheetWeeklyContentComponent implements OnInit {
  public showSpinner: boolean = false;
  constructor(
    private modalService: BsModalService,
    private projectService: HttpProjectService
  ) {}

  ngOnInit(): void {}

  public onCallModal() {
    this.showSpinner = true;
    this.projectService
      .getProjectByUserIdAsync(authmock.mock.userId)
      .subscribe((result) => {
        let dataSource: ISelectModel[] = [];
        result.forEach((project) => {
          let collection: ISelectModel[] = [];
          project.Tasks?.forEach((task) => {
            collection.push({
              Id: task.Id,
              ParentId: task.ProjectId,
              Title: task.Title,
              Description: task.Notes,
            });
          });
          dataSource.push({
            Id: project.Id,
            Title: project.Title,
            Description: project.Description,
            Collection: collection,
          });
        });
        this.showSpinner = false;
        const modalOptions: ModalOptions = {};
        modalOptions.backdrop = 'static';
        modalOptions.animated = true;
        modalOptions.initialState = {
          dataSource: dataSource,
        };
        //modalOptions.class = 'modal-sm';
        const modalRef = this.modalService.show(
          TimesheetEntryComponent,
          modalOptions
        );
      });
  }
}
