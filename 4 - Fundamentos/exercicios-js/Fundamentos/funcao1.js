// Função sem retorno
function imprimirSoma(num1, num2){
    console.log(num1 + num2);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(20, 13, 4, 5, 6);
imprimirSoma();

// Função com retorno
function soma(n1, n2 = 1){
    return n1 + n2;
}

console.log(soma(2, 3));
console.log(soma(2));