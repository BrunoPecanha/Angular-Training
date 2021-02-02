import { Routes } from '@angular/router'
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component'
import { InfoComponent } from './services/servicos/info/info.component';
import { ListaProdutoComponent } from './servico/lista-produto-component/lista-produto.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'data-binding', component: DataBindingComponent},
    {path: 'lista-produtos', component: ListaProdutoComponent},
    {path: 'servico-detalhe/:id', component: InfoComponent}
];