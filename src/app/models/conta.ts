import { AbstractEntity } from './abstractentity';
import { Categoria } from './categoria';

export class Conta extends AbstractEntity {

    public descricao:string;
    public categoria:Categoria;
    public dataVencimento:Date;
    public dataPagamento:Date;
    public valor:number;
    
    
}