class Negociacoes {
    constructor() {
        this._negociacoes = []; // Negociacao[] = Array<Negociacao>
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
