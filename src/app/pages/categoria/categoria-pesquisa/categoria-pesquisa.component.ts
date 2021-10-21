import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/models/categoria';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categoria-pesquisa',
  templateUrl: './categoria-pesquisa.component.html',
  styleUrls: ['./categoria-pesquisa.component.scss'],
  providers:[
    CategoriaService
  ]

})
export class CategoriaPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['id', 'nome', 'descricao','acoes'];
  public dataSource:MatTableDataSource<Categoria> = new MatTableDataSource();
  public categorias:Categoria[] =[];
  public form:FormGroup;

  constructor(private router:Router, private categoriaService:CategoriaService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.categoriaService.pesquisar('').subscribe((lista)=>{
      this.categorias = lista;
      this.dataSource = new MatTableDataSource(this.categorias);
    })
    this.form = this.formBuilder.group({
      pesquisa:new FormControl()
    })
  }

  public alterar(categoria){
    this.router.navigate(['categoria/cadastro', categoria]);
  }

  public remover(categoria){
    this.categoriaService.excluir(categoria.id).subscribe((res)=>{
      let index = this.categorias.indexOf(categoria);
      this.categorias.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.categorias);
    })    
  }

  public pesquisar(event){
    let nome = this.form.controls['pesquisa'].value;
    this.categoriaService.pesquisar(nome).subscribe((lista)=>{
      this.categorias = lista;
      this.dataSource = new MatTableDataSource(lista);
    });
  }

  public cadastrar(){
    this.router.navigate(['categoria/cadastro']);
  }

}
