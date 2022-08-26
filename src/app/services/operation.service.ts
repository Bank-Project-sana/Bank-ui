import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OperationService {
  constructor(private http: HttpClient) { }
    baseUrl = "http://localhost:8080/bank/v1/operations" ;

    getAllOperationByClientAccountId(id:number): Observable<Operation[]> {
      
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id","1");
 
      return this.http.get<Operation[]>(this.baseUrl+'/client-account/',{params:queryParams});
    }
  
  saveOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(this.baseUrl, operation);
  }
}
