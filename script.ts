class Client{
    public nome : string
    public idade : number
    public peso : number
    public altura : string
}
const cliente =  new Client();

const nomeClient = cliente.nome = 'Rose'
const idadeClient = cliente.idade = 20  
const pesoCliente = cliente.peso = 89
const alturaCliente = cliente.altura = '1.55'
 
console.log ('Classe Cliente');
console.log(`Qual o nome do cliente: ${nomeClient}\n`);
console.log(`Qual a idade do cliente: ${idadeClient}\n`);
console.log(`Qual o peso do cliente: ${pesoCliente}\n`);
console.log(`Qual á altura do cliente: ${alturaCliente}\n`);
 