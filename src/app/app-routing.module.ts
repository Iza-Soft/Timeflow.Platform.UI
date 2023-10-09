import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'action',
  },
  {
    path: 'action',
    loadChildren: () =>
      import('../app/modules/timesheet/timesheet.module').then(
        (m) => m.TimesheetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
