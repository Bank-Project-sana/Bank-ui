import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountModel } from 'src/app/models/account.model';
import { Operation } from 'src/app/models/operation.model';
import { OperationService } from 'src/app/services/operation.service';


@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.css']
})
export class RequestModalComponent implements OnInit {
  
  addForm: FormGroup;
  socialReason:FormControl;
  typesList= ["WITHDRAWAL", "DEPOSIT"]
  constructor(public modalService: BsModalRef,private fb: FormBuilder,private operationService :OperationService,
    private datePipe: DatePipe) { }
  
  ngOnInit(): void {
    this.addForm = this.fb.group({
      
      amount:['',Validators.required],
      RequestType:['',Validators.required],
      
    })
   
  }
  onSubmit() {
 
  this.operationService.saveOperation(this.prepareModelTOSave()).subscribe((data)=>{
    
  },(err)=>{
    console.error(err+"error to save");
  },()=>{
    this.modalService.hide();
  });
   
  }
  prepareModelTOSave():Operation{
   let  account = {id:1} as AccountModel;
   let operationTOsave ={
    amount:this.addForm.value.amount,
    type: this.addForm.value.RequestType,
    date: this.datePipe.transform(new Date(), 'hh:mm yyyy-MM-dd').toString(),
    balance:null,
    account: account
    
   } as Operation;
   return operationTOsave;
  }
}
