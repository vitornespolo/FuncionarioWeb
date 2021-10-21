import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service'; 
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable()
export class FuncionarioService extends AbstractService {

    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "funcionario";
    }

    /**
     * serviço para salvar funcionario no servidor
     * @param funcionario > objecto que representa a tabela
     */
    public salvar(funcionario:Funcionario):Observable<Funcionario>{
        return this.http.post<Funcionario>(this.getUrl('salvar'),funcionario);
    }

    public pesquisar(nome:any):Observable<Array<Funcionario>>{
        return this.http.post<Array<Funcionario>>(this.getUrl('nome'),nome);
    }

    public buscarPorId(codigo:any):Observable<Funcionario>{
        return this.http.get<Funcionario>(this.getUrl(`/${codigo}`));
    }

    public excluir(codigo:any):Observable<any>{
        return this.http.delete(this.getUrl(`/${codigo}`));
    }
}