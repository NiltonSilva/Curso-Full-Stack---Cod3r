function soma(){
    let soma = 0;
    for(i in arguments){    // arguments é um array. Nesse caso ou pegar o indice de cada elemento do meu array
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, "teste"));
console.log(soma("a", "b", "c"));