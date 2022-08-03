// Função em JS é First-Class Object (Citizens)
// Higher-order functuon

// criar de forma literal
function fun1(){

}

const fun2 = function (){
    // Estou atribuindo esta função anônima a uma constante.
    // Se eu chamar o nome da constante junto com os parenteses eu vou invocar a função. Se eu chamar a constante eu invoco a função emm sí só. Mas para executar a função devo usar os parênteses.
}

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2];
console.log(array[0](2,3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar());

// Passar função como parâmetro para outra função
function run(fun){
    fun()
}

run(function(){console.log('Executando')})

// Retornando uma outra função
function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}
soma(1,2)(3);
const cincoMais = soma(2,3)
cincoMais(4)