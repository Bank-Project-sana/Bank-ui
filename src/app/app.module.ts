import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HistoryTableComponent } from './dashbord/history-table/history-table.component';
import { MenuComponent } from './dashbord/menu/menu.component';
import { RequestModalComponent } from './dashbord/request-modal/request-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    HistoryTableComponent,
    MenuComponent,
    RequestModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule, ReactiveFormsModule

  ],
  providers: [    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
