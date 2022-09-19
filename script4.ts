class Funcionario {
    public nome : string;
    public idade : number;
    public função : string;
    public sexo : string;

}
 const funcionario = new Funcionario();

 const fuNome = funcionario.nome = 'Rose';
 const fuIdade = funcionario.idade = 20
 const fuFunção = funcionario.função ='recepcionista';
 const fuSexo = funcionario.sexo = 'femenino';

 console.log('Classe funcionario\n');
 
 console.log(`Nome do funcionario: ${fuNome}\n`);
 console.log(`Idade do funcionario: ${fuIdade}\n`);
 console.log(`Função: ${fuFunção}\n`);
 console.log(`Sexo: ${fuSexo}\n`);