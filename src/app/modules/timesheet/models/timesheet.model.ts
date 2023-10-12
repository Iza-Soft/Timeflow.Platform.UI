export interface ITimeSheet {
  Id: number;
  ProjectId: number;
  ContractorId: number;
  DayOfMonth: number;
  MonthOfYear: number;
  Year: number;
  DayOfWeek: string;
  Month: string;
  WorkingHours: number;
}
