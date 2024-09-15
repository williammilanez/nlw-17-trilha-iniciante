/*
// hello world!
console.log("hello world!");
*/


/*
// olá, mundo!
console.log("olá, mundo!");
*/

/*
// olá, mundo
let mensagem = "olá, mundo!"
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
*/

/*
// let = aceita mudar a variável
// olá, mundo
let mensagem = "olá, mundo!"
mensagem = 2
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
*/

/*
// const = NÃO aceita mudar a variável
// olá, mundo
const mensagem = "olá, mundo!"
mensagem = 2
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
console.log(mensagem);
*/

/*
// o sinal de = é uma atribuição de valor
const mensagem = "olá, mundo!"
console.log(mensagem);
*/

// o que fica em escopo, fica como uma separação local {}, enquanto o que está fora é global
/*
// global
const mensagem = "olá, eu!"
{
    const mensagem = "olá, mundo!"
}
console.log(mensagem);
*/
/*
// global e local
const mensagem = "olá, eu!"
{
    const mensagem = "olá, mundo!"
    console.log(mensagem)
}
console.log(mensagem);
*/

/*
// arrays, objetos
let metas = ["ola", "mundo"]
console.log(metas[1] + ", " + metas[0])
*/

/*
// arrays, objetos - outros tipos de dados
let meta = {
    value: 'Ler um livro por mês',
    checked: false,
}
console.log(meta.value)
*/

/*
// function - está fora de um objeto, enquanto um método está dentro de um objeto
let meta = {
    value: 'Ler um livro por mês',
    checked: false,
    isChecked: (info) => {
        console.log(info)
    }
}
meta.isChecked(meta.value)
// arrow function => é algo que atribui valor
const criarMeta = () => {}
*/

/*
let meta = {
    value: 'Ler um livro por mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}
meta.log(meta.value)
// arrow function => é algo que atribui valor
const criarMeta = () => {}

// named function
// function criarMeta() {}
*/

/*
// manipular valor
let meta = {
    value: 'Ler um livro por mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}
meta.value = "não é mais ler um livro"
meta.log(meta.value)
// arrow function => é algo que atribui valor
const criarMeta = () => {}
*/

let meta ={
    value: 'ler um livro por mês',
    checked: true,
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

console.log(metas[1].value)


