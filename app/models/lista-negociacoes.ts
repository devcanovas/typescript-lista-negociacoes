import { Negociacao } from './negociacao.js';

export class ListaNegociacoes {

    // também pode ser feito dessa forma:
    // private listaNegociacoes: Negociacao[] = [];
    // porém da forma abaixo é muita mais fácil de entender
    private listaNegociacoes: Array<Negociacao> = [];


    public add(negociacao: Negociacao) {
        this.listaNegociacoes.push(negociacao);
    }

    //também pode ser feito dessa forma:
    // public showAll(): readonly Negociacao[] {}
    // agora o readonly passa a ser um modificador de acesso, e o array é declarado como no exemplo anterior
    public showAll(): ReadonlyArray<Negociacao> {
        return this.listaNegociacoes;
    }

}