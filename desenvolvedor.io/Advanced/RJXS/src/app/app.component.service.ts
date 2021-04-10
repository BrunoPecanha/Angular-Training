import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppComponentService {

    Request: HttpClient;

    constructor (request: HttpClient) 
    {         
        this.Request = request;
    } 

    async cadastrarUsuario(aparelho: number, nome: string, sobrenome: string, email: string, senha: string) {
        debugger
        var creatingUserDto = {
            mobileInfo: aparelho, 
            name: nome, 
            lastName: sobrenome, 
            email: email,
            password: senha
        }  

         var teste=  await this.Request.post("https://localhost:44396/api/User", creatingUserDto)
                         .subscribe();
       
    }    
    
  }