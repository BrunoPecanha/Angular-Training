import { Company } from "./company.model";

export class ServiceTypeModel {
    id: number;        
    registeringDate: Date;        
    lastUpdate: Date; 
    activated: Boolean;
    name: string;
    img: string;
    mediumTime: string;
    price: number;
    companyId: number;
    company: Company;
}