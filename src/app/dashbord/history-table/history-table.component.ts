import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Operation } from 'src/app/models/operation.model';
import { OperationService } from 'src/app/services/operation.service';
import { RequestModalComponent } from '../request-modal/request-modal.component';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent implements OnInit {

  currentRoute: string;
  operationList: Operation[];

  modalRef: BsModalRef;

  constructor(private router: Router,private modalService: BsModalService,private operationService : OperationService) {
    
  }
  

  ngOnInit() {
    this.operationService.getAllOperationByClientAccountId(1).subscribe(
      (data) => {
        this.operationList = data;
      })
      
    }
     

  
  showAddForm() {
    this.modalRef = this.modalService.show(RequestModalComponent);
    
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
