import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HistoryTableComponent } from './dashbord/history-table/history-table.component';

const routes: Routes = [
  { path: 'home', component: DashbordComponent },
    {path: 'transactionHistory', component: HistoryTableComponent},
    {path:'withdrawalHistory', component: HistoryTableComponent},
    {path:'depositHistory', component: HistoryTableComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
