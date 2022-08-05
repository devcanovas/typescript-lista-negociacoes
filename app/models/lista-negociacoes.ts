import { Negociacao } from './negociacao.js';

export class ListaNegociacoes {

    private listaNegociacoes: Array<Negociacao> = [];


    public add(negociacao: Negociacao) {
        this.listaNegociacoes.push(negociacao);
    }

    public showAll(): ReadonlyArray<Negociacao> {
        return this.listaNegociacoes;
    }

}