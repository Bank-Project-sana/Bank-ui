import { AccountModel } from "./account.model";

export interface ClientModel {
    id:string;
    Fullname:string;
   account:AccountModel;
   
}
