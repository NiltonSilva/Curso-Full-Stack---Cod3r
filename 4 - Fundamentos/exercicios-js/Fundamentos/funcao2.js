// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2, 5);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(7, 9));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(71, 63));

const imprimir2 = a => console.log(a);
imprimir2("Legal!!!")