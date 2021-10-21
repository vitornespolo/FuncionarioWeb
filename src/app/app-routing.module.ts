import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCadastroComponent } from './pages/funcionario/funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioPesquisaComponent } from './pages/funcionario/funcionario-pesquisa/funcionario-pesquisa.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'funcionario/cadastro',
    pathMatch:'full'
  },
  {
    path:'funcionario/cadastro',
    component:FuncionarioCadastroComponent
  },
  {
    path:'funcionario/pesquisa',
    component:FuncionarioPesquisaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
