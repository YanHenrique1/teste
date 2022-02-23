import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
