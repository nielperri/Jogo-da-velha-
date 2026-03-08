let jogador = "X";
let jogoAtivo = true;

function jogar(casa){

if(casa.innerHTML != "" || !jogoAtivo){
return;
}

casa.innerHTML = jogador;

if(verificarVitoria()){
document.getElementById("status").innerHTML = "Jogador " + jogador + " venceu!";
jogoAtivo = false;
return;
}

if(verificarEmpate()){
document.getElementById("status").innerHTML = "Empate!";
jogoAtivo = false;
return;
}

jogador = jogador == "X" ? "O" : "X";
document.getElementById("status").innerHTML = "Vez do jogador " + jogador;
}

function verificarVitoria(){

let casas = document.getElementsByClassName("casa");

let combinacoes = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

for(let i=0;i<combinacoes.length;i++){

let a = combinacoes[i][0];
let b = combinacoes[i][1];
let c = combinacoes[i][2];

if(
casas[a].innerHTML != "" &&
casas[a].innerHTML == casas[b].innerHTML &&
casas[a].innerHTML == casas[c].innerHTML
){
return true;
}

}

return false;
}

function verificarEmpate(){

let casas = document.getElementsByClassName("casa");

for(let i=0;i<casas.length;i++){
if(casas[i].innerHTML == ""){
return false;
}
}

return true;
}

function reiniciar(){

let casas = document.getElementsByClassName("casa");

for(let i=0;i<casas.length;i++){
casas[i].innerHTML = "";
}

jogador = "X";
jogoAtivo = true;

document.getElementById("status").innerHTML = "Vez do jogador X";
}
