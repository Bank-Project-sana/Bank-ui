import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OperationService {
  constructor(private http: HttpClient) { }
    baseUrl = "http://localhost:8080/bank/operation" ;

    getAllOperationByClientAccountId(id:number): Observable<Operation[]> {
      return this.http.get<Operation[]>(this.baseUrl+'/client-account/'+id);
    }
  
  saveOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(this.baseUrl, operation);
  }
}
