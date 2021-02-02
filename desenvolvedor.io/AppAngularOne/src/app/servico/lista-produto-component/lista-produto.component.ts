import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceTypeModel } from 'src/app/models/ServiceType';
import { ServiceTypeService } from 'src/app/services/servicos/ServiceType.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  constructor(private tipo_servico: ServiceTypeService, private route: ActivatedRoute) { }

  public servicos: ServiceTypeModel[];
  public servico: ServiceTypeModel;

  ngOnInit(): void {
    this.tipo_servico.obterServicos()
      .subscribe(
        servicos =>  {
          this.servicos = servicos;
          console.log(servicos);
        },
        error => console.log(error)
      );
  }
}
