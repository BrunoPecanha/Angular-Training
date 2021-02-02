import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceTypeModel } from 'src/app/models/ServiceType';
import { ServiceTypeService } from '../ServiceType.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public servico: ServiceTypeModel;
  
  constructor(private tipo_servico: ServiceTypeService, private route: ActivatedRoute) { 
    debugger
    const id: string = route.snapshot.params.id;

    this.obterDetalhes(parseInt(id));

  }
  
  ngOnInit(): void { }  

  obterDetalhes(id: number): void {
    debugger
    this.tipo_servico.obterServico(id)
      .subscribe(
        servico =>  {
          this.servico = servico;
          console.log(servico);
        },
        error => console.log(error)
      );
  } 
}
