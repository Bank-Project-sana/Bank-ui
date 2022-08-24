import { OperationTypeModel } from "./operationType.model";
import { ClientModel } from "./client.model";
import { AccountModel } from "./account.model";

export interface Operation {
    id:string;
    type:OperationTypeModel;
    amount:number;
   account:AccountModel
    date:string;
    balance:number;

    
}