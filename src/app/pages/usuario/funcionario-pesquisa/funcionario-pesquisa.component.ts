import { funcionario } from '../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './funcionario-pesquisa.component.html',
  styleUrls: ['./funcionario-pesquisa.component.scss'],
  providers:[
    FuncionarioService
  ]
})
export class FuncionarioPesquisaComponent implements OnInit {
  public funcionarios:funcionario[] = [];
  public dataSource:MatTableDataSource<funcionario> = new MatTableDataSource(this.funcionarios);
  public displayedColumns:string[] = ['codigo','nome','sobrenome','emmail','pis','acoes'] ;
  public form:FormGroup = new FormGroup({
    pesquisa:new FormControl('')
  });
  constructor(private router:Router, private funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.pesquisar();    
  }
  public pesquisar(){
    let nome = this.form.controls['pesquisa'].value;
    this.funcionarioService.pesquisar(nome).subscribe((lista)=>{
      this.funcionarios = lista;
      this.dataSource = new MatTableDataSource(this.funcionarios);
    });
  }
  public remover(funcionario){
    this.funcionarioService.excluir(funcionario.codigo).subscribe((res)=>{
      console.log('Removendo o funcionario',funcionario)
      let index = this.funcionarios.indexOf(funcionario);
      this.funcionarios.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.funcionarios);
    });    
  }
  public alterar(funcionario){
    console.log('Alterando o funcionario',funcionario)
    this.router.navigate(['/usuario/cadastro', funcionario]); 
  }
  public novo(){
    this.router.navigate(['/funcionario/cadastro']); 
  }

}
