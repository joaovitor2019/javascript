class Negociacoes{
    private _negociacoes: Negociacao[] = [];// Negociacao[] = Array<Negociacao>

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(){
        return this._negociacoes;
    
    }
}