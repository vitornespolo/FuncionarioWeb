import { funcionario } from '../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.scss'],
  providers:[
    FuncionarioService
  ]
})
export class FuncionarioCadastroComponent implements OnInit {

  public funcionario:funcionario = new funcionario();
  public form:FormGroup = new FormGroup({
    codigo:new FormControl(),
    nome:new FormControl(''),
    sobrenome: new FormControl(),
    email:new FormControl(),
    pis:new FormControl()    
  })
  constructor(private route:ActivatedRoute,private router:Router, private funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.funcionario = params as funcionario;
      this.form.patchValue(this.funcionario);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Campos invalidos!');
      return;
    }
    this.funcionario = this.form.value;
    console.log('Funcionario', this.funcionario);
    this.funcionarioService.salvar(this.funcionario).subscribe((user)=>{
      alert('Salvo com Sucesso');
      this.router.navigate(['funcionario/pesquisa']);
    });    
  }

}
