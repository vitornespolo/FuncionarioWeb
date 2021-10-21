import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService extends AbstractService {

    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "categoria";
    }

    /**
     * serviço para salvar categorias no servidor
     * @param categoria > objecto que representa a tabela
     */
    public salvar(categoria:Categoria):Observable<Categoria>{
        return this.http.post<Categoria>(this.getUrl('salvar'),categoria);
    }

    public pesquisar(nome):Observable<Array<Categoria>>{
        return this.http.post<Array<Categoria>>(this.getUrl('nome'),nome);
    }

    public buscarPorId(id):Observable<Categoria>{
        return this.http.get<Categoria>(this.getUrl(`${id}`));
    }

    public excluir(id):Observable<any>{
        return this.http.delete(this.getUrl(`${id}`));
    }

}