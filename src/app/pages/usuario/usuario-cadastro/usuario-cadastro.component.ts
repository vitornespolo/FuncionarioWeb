import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss'],
  providers:[
    UsuarioService
  ]
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario();
  public form:FormGroup = new FormGroup({
    id:new FormControl(),
    nome:new FormControl(''),
    login: new FormControl(),
    senha:new FormControl()    
  })
  constructor(private route:ActivatedRoute,private router:Router, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.usuario = params as Usuario;
      this.form.patchValue(this.usuario);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Campos invalidos!');
      return;
    }
    this.usuario = this.form.value;
    console.log('Usuario', this.usuario);
    this.usuarioService.salvar(this.usuario).subscribe((user)=>{
      alert('Salvo com Sucesso');
      this.router.navigate(['usuario/pesquisa']);
    });    
  }

}
