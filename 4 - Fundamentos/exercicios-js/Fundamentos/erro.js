function tratarErroELancar(erro){
    // throw new Error("Ocorreu um erro de processamento. Nosso suporte técnico já foi notificado");
    // throw 10
    // throw true
    // throw "Mensagem"
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final");
    }
    
}

const obj = { name: "Roberto" }
imprimirNomeGritado(obj);