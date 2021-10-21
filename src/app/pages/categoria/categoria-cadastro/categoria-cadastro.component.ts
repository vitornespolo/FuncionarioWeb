import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.scss'],
  providers:[
    CategoriaService
  ]
})
export class CategoriaCadastroComponent implements OnInit {

  public form:FormGroup;
  public categoria:Categoria = new Categoria();

  constructor(private route:ActivatedRoute,private router:Router,public formBuilder:FormBuilder,
    private categoriaService:CategoriaService ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id:new FormControl(),
      nome:new FormControl(),
      descricao:new FormControl()
    });
    this.route.params.subscribe((cate)=>{
      this.categoria = cate as Categoria;
      this.form.patchValue(this.categoria);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Possui campos obrigatórios');
      return;
    }
    this.categoria = this.form.value;
    this.categoriaService.salvar(this.categoria).subscribe((categoria)=>{
      alert('Salvo com sucesso');
      console.table(categoria);
      this.router.navigate(['categoria/pesquisa']);    
    });
  }

}
