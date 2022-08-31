import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OperationService {
  constructor(private http: HttpClient) { }
    

    getAllOperationByClientAccountId(id:number): Observable<Operation[]> {
      
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id","1");
 
      return this.http.get<Operation[]>(environment.envUrl+environment.baseUrl+'/operation/client-account/',{params:queryParams});
    }
  
  saveOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(environment.envUrl+environment.baseUrl+'/operation', operation);
  }
}
