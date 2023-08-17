class Retangulo {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    get areaTotal () {
        return this.altura * this.largura;
    }
}

ret = new Retangulo(3, 4);

console.log(ret.areaTotal);