import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service'; 
import { Observable } from 'rxjs';
import { funcionario } from '../models/funcionario';

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
    public salvar(funcionario:funcionario):Observable<funcionario>{
        return this.http.post<funcionario>(this.getUrl('salvar'),funcionario);
    }

    public pesquisar(nome):Observable<Array<funcionario>>{
        return this.http.post<Array<funcionario>>(this.getUrl('nome'),nome);
    }

    public buscarPorId(codigo):Observable<funcionario>{
        return this.http.get<funcionario>(this.getUrl(`/${codigo}`));
    }

    public excluir(codigo):Observable<any>{
        return this.http.delete(this.getUrl(`/${codigo}`));
    }
}