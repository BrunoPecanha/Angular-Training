import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:['./app.component.css']
})
export class AppComponent implements OnInit {

  servico: AppComponentService;
  nome: string;
  aparelho: number;
  sobrenome: string;
  senha: string;
  email: string;


  constructor(servico: AppComponentService) {
    this.servico = servico;
  }

     ngOnInit(): void {
    //   this.minhaPromise('José')
    //   .then(result => console.log(result))
    //   .catch(erro => console.log(erro)); 


      this.minhaObservable('Bruno')
          .subscribe(
          result => console.log(result), 
          erro => console.log(erro), 
          () => console.log('Fim'));

    const observer = {
      next: valor => console.log('Next: ', valor),
      error: erro => console.log('Erro: ', erro),
      complete: () => console.log('Fim')
    }
    
    const obs = this.minhaObservable('Bruno');
    obs.subscribe(observer);

  }

  title = 'RJXS';

  minhaPromise(nome: string) : Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome === 'Bruno')
      {
        setTimeout(() => {
          resolve('Seja Bem Vindo ' + nome);
        }, 1000);
      }
      else
      {
        reject('Ops, você é autorizado.')
      }
    })
  }

  minhaObservable(nome: string) : Observable<string> { 
    return new Observable(subscriber => {
      if (nome === 'Bruno') {
        subscriber.next('Primeira chamada, ' + nome);
        subscriber.next('Segunda chamada, ' + nome);
        setTimeout(() => {
          subscriber.next('Resposta com delay ' + nome);
        }, 5000);   
        subscriber.complete();
      }
      else {
        subscriber.error('Ops, deu erro.');
      }         
    })
  }
  
  
  cadastrar() : void {
    debugger
    this.servico.cadastrarUsuario(this.aparelho, this.nome, this.sobrenome, this.email, this.senha);
  }

  selecionaAparelho(modelo: number){  
    debugger  
    this.aparelho = modelo;
  }
}
