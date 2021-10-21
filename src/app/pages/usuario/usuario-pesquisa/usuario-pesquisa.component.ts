import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.scss'],
  providers:[
    UsuarioService
  ]
})
export class UsuarioPesquisaComponent implements OnInit {
  public usuarios:Usuario[] = [];
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource(this.usuarios);
  public displayedColumns:string[] = ['id','nome','login','senha','acoes'] ;
  public form:FormGroup = new FormGroup({
    pesquisa:new FormControl('')
  });
  constructor(private router:Router, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.pesquisar();    
  }
  public pesquisar(){
    let nome = this.form.controls['pesquisa'].value;
    this.usuarioService.pesquisar(nome).subscribe((lista)=>{
      this.usuarios = lista;
      this.dataSource = new MatTableDataSource(this.usuarios);
    });
  }
  public remover(usuario){
    this.usuarioService.excluir(usuario.id).subscribe((res)=>{
      console.log('Removendo o usuario',usuario)
      let index = this.usuarios.indexOf(usuario);
      this.usuarios.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.usuarios);
    });    
  }
  public alterar(usuario){
    console.log('Alterando o usuario',usuario)
    this.router.navigate(['/usuario/cadastro', usuario]); 
  }
  public novo(){
    this.router.navigate(['/usuario/cadastro']); 
  }

}
