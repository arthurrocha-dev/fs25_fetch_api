// Declaração de um objeto
const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
  profissao: "estudante",
  dormir: dormir(),
};

// Criação de uma função
function dormir() {
  console.log("tomar banho");
  console.log("escovar os dentes");
  console.log("vista seu pijaminha");
  console.log("deitar");
  console.log("fechar os olhos");
  console.log("contar carneirinhos");
  console.log("zzzzzzzzzzzzz");
}

console.log(pessoa.dormir);

// Criação de uma lisa de nomes
const listaDeNomes = [
  "José",
  "Maria",
  "Pedro",
  "João",
  "Ana",
  "Carlos",
  "Mariana",
  "Paulo",
  "Isabela",
  "Rafael",
];

// Adicionando um novo elemento em uma lista
listaDeNomes.push("meu nome");

// Remoção do ultimo elemento
listaDeNomes.pop();

// Remoção do primeiro elemento
listaDeNomes.shift();

// Realização de loop de reptição na lista de nomes
for (let index = 0; index <= 10; index++) {
  console.log(listaDeNomes[index]);
}

// Crianção de lista de objetos
const listaDePessoas = [
  {
    nome: "José",
    idade: 30,
    profissao: "professor",
  },
  {
    nome: "Maria",
    idade: 25,
    profissao: "engenheira",
  },
  {
    nome: "Pedro",
    idade: 35,
    profissao: "médico",
  },
  {
    nome: "João",
    idade: 40,
    profissao: "advogado",
  },
  {
    nome: "Ana",
    idade: 28,
    profissao: "arquiteta",
  },
  {
    nome: "Carlos",
    idade: 22,
    profissao: "estudante",
  },
];

// Criação de nova lista para guardar o nome das pessoas
const listaDeNomes2 = listaDePessoas.map((pessoa) => {
  return pessoa.nome;
});

console.log(listaDeNomes2);

// Percorrendo uma lista de objetos e exibindo o nome de cada um
listaDePessoas.forEach((pessoa) => {
  console.log(pessoa.nome);
});
