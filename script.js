const botaoSortear = document.querySelector("div.box button");
var numeroSorteado = document.querySelector("div.box h1");
var numero2 = document.querySelector("div.numero2 h1");
var numero3 = document.querySelector("div.numero3 h1");
var numero4 = document.querySelector("div.numero4 h1");
var numero5 = document.querySelector("div.numero5 h1");
var numero6 = document.querySelector("div.numero6 h1");
var roleta = [];


for(i=1; i<=60; i++ ){
    roleta.push(i)
}

botaoSortear.addEventListener("click", () => {
    numeroSorteado.innerHTML = "" + roleta[Math.floor(Math.random()* roleta.length)]
    numero2.innerHTML = "" + roleta[Math.floor(Math.random()* roleta.length)]
    numero3.innerHTML = "" + roleta[Math.floor(Math.random()* roleta.length)]
    numero4.innerHTML = "" + roleta[Math.floor(Math.random()* roleta.length)]
    numero5.innerHTML = "" + roleta[Math.floor(Math.random()* roleta.length)]
    numero6.innerHTML = "" + roleta[Math.floor(Math.random()* roleta.length)]
})

