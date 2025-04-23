/* 
var numero1 = 1;
var numero2 = "1";

if (numero1 === numero2) {
    console.log("Igual");
} else {
    console.log("Diferente")
}
 */

/* 
var botao = document.getElementById("botao")

botao.addEventListener("Click", function () {

});

console.log("Oi") */

var nome = document.getElementById("nome")
var profissao = document.querySelector("profissao")
var botao = document.getElementById("botao")

botao.addEventListener("click", function (){

    if(nome.value == "") {
        console.log("Preenche esse bagui aí");
        return;
    }
    console.log(nome.value);
    console.log(profissao.value);
    console.log("FINAL");
})