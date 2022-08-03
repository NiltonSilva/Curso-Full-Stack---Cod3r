let isAtivo = false;
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

isAtivo = 1;
console.log(!!isAtivo)

console.log("OS VERDADEIROS:")
console.log(!!3);   // qualquer numero inteiro, com exceção do ZERO, será verdadeiro
console.log(!!-1)   // qualquer numero inteiro, com exceção do ZERO, será verdadeiro
console.log(!!" ")  // espaço em branco (string com pelo menos um espaço em branco) será verdadeiro
console.log(!!"texto")  // qualquer texto será verdadeiro
console.log(!![])   // um array vazio será verdadeiro
console.log(!!{})   // um objeto vazio será verdadeiro
console.log(!!Infinity) // O infinito será verdadeiro
console.log(!!(isAtivo = true))

console.log("\nOS FALSOS:")
console.log(!!0);   // o zero é o único inteiro que será falso
console.log(!!"")   //string sem nada será falso
console.log(!!null) // null será falso
console.log(!!NaN); // Not a Number será falso
console.log(!!undefined)    // indefinido será faso
console.log(!!(isAtivo = false))

console.log("\n Para finalizar")
console.log(!!("" || null || 0 || " "))

let nome = ""
console.log(nome || "Desconhecido")

let nome2 = "Lucas"
console.log(nome2 || "Desconhecido")