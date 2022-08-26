import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HistoryTableComponent } from './dashbord/history-table/history-table.component';

const routes: Routes = [
  { path: '', component: HistoryTableComponent },
    {path: 'transactionHistory', component: HistoryTableComponent},
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
