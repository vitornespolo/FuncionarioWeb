import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export abstract class AbstractService {

    protected webContext:string = 'Funcionario/rest';

    constructor(protected http:HttpClient){

    }

    public abstract getPath():string;

    public getUrl(pathEnd:any){
        return environment.url + this.webContext + '/' +this.getPath()+"/"+ pathEnd;
    }
}