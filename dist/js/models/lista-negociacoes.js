export class ListaNegociacoes {
    constructor() {
        this.listaNegociacoes = [];
    }
    add(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    showAll() {
        return this.listaNegociacoes;
    }
}
