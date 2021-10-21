import { Funcionario } from '../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.scss'],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioCadastroComponent implements OnInit {

  public funcionario: Funcionario = new Funcionario();
  public form: FormGroup = new FormGroup({
    codigo: new FormControl(),
    nome: new FormControl('', Validators.required),
    sobreNome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pis: new FormControl()
  })
  constructor(private route: ActivatedRoute, private router: Router, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.funcionario = params as Funcionario;
      this.form.patchValue(this.funcionario);
    })
  }

  public salvar() {
    if (this.form.invalid) {
      alert('Campos invalidos!');
      return;
    }
    this.funcionario = this.form.value;
    console.log('Funcionario', this.funcionario);
    this.funcionarioService.salvar(this.funcionario).subscribe((user) => {
      alert('Salvo com Sucesso');
      this.router.navigate(['funcionario/pesquisa']);
    });
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  // }

}
