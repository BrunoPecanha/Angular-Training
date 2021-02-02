import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { ServiceTypeModel } from "src/app/models/ServiceType";


@Injectable()
export class ServiceTypeService {
    constructor(private http: HttpClient) {}
    protected urlService: string = 'https://localhost:44396/api/servicetype/'

    obterServicos() : Observable<ServiceTypeModel[]> {
        return this.http
                   .get<ServiceTypeModel[]>(this.urlService + 'getall/1/1/10');
    }

    obterServico(id: number) : Observable<ServiceTypeModel> {
        debugger
        return this.http
                   .get<ServiceTypeModel>(this.urlService + 'getById?id=' + id);
    }
}