import { ITaskModel } from '../task/task-model';

export interface IProject {
  Id: number;
  userId: string;
  Title: string;
  Description?: string;
  Tasks?: ITaskModel[];
}
