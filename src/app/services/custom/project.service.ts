import { Injectable } from '@angular/core';
import { HttpProjectService } from '../http/http-project.service';
import { authmock } from 'src/app/mock-factory/auth/auth-mock';
import { Observable, forkJoin } from 'rxjs';
import { IProject } from 'src/app/shared/models';
import { ISelectModel } from 'src/app/shared/models/select/select-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projectList: IProject[];
  constructor(private _projectService: HttpProjectService) {
    forkJoin([
      this._projectService.getProjectByUserIdAsync(authmock.mock.userId),
    ]).subscribe(([projectList]) => {
      this.projectList = projectList;
    });
  }

  public setProjectsToSelectModel(): ISelectModel[] {
    let dataSource: ISelectModel[] = [];
    this.projectList?.forEach((project) => {
      let collection: ISelectModel[] = [];
      project.Tasks?.forEach((task) => {
        collection.push({
          Id: task.Id,
          ParentId: task.ProjectId,
          Title: task.Title,
          Description: task.Description,
        });
      });
      dataSource.push({
        Id: project.Id,
        Title: project.Title,
        Description: project.Description,
        Collection: collection,
      });
    });
    return dataSource;
  }
}
