export interface ISelectModel {
  Id: number;
  ParentId?: number;
  Title: string;
  Description?: string;
  Collection?: ISelectModel[];
}
