class Eletronico {
    public nome : string
    public valor : number
    public garantia : string
    public cor : string
}
const eletronico = new Eletronico();

const elNome = eletronico.nome = 'pc';
const elValor = eletronico.valor = 4.000
const elGarantia = eletronico.garantia = '3 ano';
const elCor = eletronico.cor = 'preto';

console.log('Classe Eletronico\n');
console.log(`Nome do eletronico:${elNome}\n`);
console.log(`Valor do Eletronico: ${elValor}\n`);
console.log(`Garantia:${elGarantia}\n`);
console.log(`Cor:${elCor}\n`);