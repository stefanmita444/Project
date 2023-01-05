import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineManagementComponent } from './machine-management/machine-management.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TimecardComponent } from './timecard/timecard.component';

const routes: Routes = [
  { path: "job-code-management", component: MainContentComponent },
  { path: "machine-management", component: MachineManagementComponent },
  { path: "timecard-approval", component: TimecardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
