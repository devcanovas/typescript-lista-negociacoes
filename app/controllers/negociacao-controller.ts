import { ListaNegociacoes } from './../models/lista-negociacoes.js';
import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;

    private inputValor: HTMLInputElement;

    private inputQuantidade: HTMLInputElement;

    private negociacoes = new ListaNegociacoes();

    constructor () {
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#valor');
        this.inputQuantidade = document.querySelector('#quantidade');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.add(negociacao);
        console.log(this.negociacoes.showAll());
        
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const regexp = /-/g;
        const date = new Date(this.inputData.value.replace(regexp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);        
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}