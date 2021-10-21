import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ContaService } from 'src/app/services/conta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Conta } from 'src/app/models/conta';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-conta-cadastro',
  templateUrl: './conta-cadastro.component.html',
  styleUrls: ['./conta-cadastro.component.scss'],
  providers:[
    ContaService, CategoriaService
  ]
})
export class ContaCadastroComponent implements OnInit {

  public form:FormGroup = new FormGroup({
    id:new FormControl(),
    descricao:new FormControl(),
    categoria:new FormControl(),
    valor:new FormControl(),
    dataVencimento:new FormControl(),
    dataPagamento:new FormControl()
  })
  public conta:Conta;
  public categorias:Categoria[] = [];

  constructor(private router:Router, private route:ActivatedRoute,
       private categoriaService:CategoriaService,
      private contaService:ContaService) { }

  ngOnInit(): void {
    this.getCategorias();

  }

  public getCategorias(){
    this.categoriaService.pesquisar('').subscribe((lista)=>{
      this.categorias = lista;
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Campos obrigatórios!');
      return ;
    }
    this.conta = this.form.value;
    this.contaService.salvar(this.conta).subscribe((conta)=>{
      this.router.navigate(['conta/pesquisa']);
    })

  }

}
