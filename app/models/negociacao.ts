export class Negociacao { 

    private _data: Date;

    private _valor: number;

    private _quantidade: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }   

    public get data(): Date {
        return this._data;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public get valor(): number {
        return this._valor;
    }

}