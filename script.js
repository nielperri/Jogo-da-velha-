let jogador = "X"
let jogoAtivo = false
let contraMaquina = false

function modoJogador(){
contraMaquina = false
reiniciar()
document.getElementById("status").innerHTML = "Modo: 2 Jogadores"
}

function modoMaquina(){
contraMaquina = true
reiniciar()
document.getElementById("status").innerHTML = "Modo: Jogador vs Máquina"
}

function jogar(casa,index){

if(casa.innerHTML != "" || !jogoAtivo){
return
}

casa.innerHTML = jogador

if(verificarVitoria()){
document.getElementById("status").innerHTML = jogador + " venceu!"
jogoAtivo = false
return
}

if(verificarEmpate()){
document.getElementById("status").innerHTML = "Empate!"
jogoAtivo = false
return
}

jogador = jogador == "X" ? "O" : "X"

if(contraMaquina && jogador == "O"){
setTimeout(jogadaMaquina,500)
}

}

function jogadaMaquina(){

let casas = document.getElementsByClassName("casa")

let livres = []

for(let i=0;i<casas.length;i++){
if(casas[i].innerHTML == ""){
livres.push(i)
}
}

if(livres.length == 0) return

let escolha = livres[Math.floor(Math.random()*livres.length)]

casas[escolha].innerHTML = "O"

if(verificarVitoria()){
document.getElementById("status").innerHTML = "Máquina venceu!"
jogoAtivo = false
return
}

jogador = "X"

}

function verificarVitoria(){

let casas = document.getElementsByClassName("casa")

let v = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

for(let i=0;i<v.length;i++){

let a=v[i][0]
let b=v[i][1]
let c=v[i][2]

if(
casas[a].innerHTML != "" &&
casas[a].innerHTML == casas[b].innerHTML &&
casas[a].innerHTML == casas[c].innerHTML
){
return true
}

}

return false
}

function verificarEmpate(){

let casas=document.getElementsByClassName("casa")

for(let i=0;i<casas.length;i++){
if(casas[i].innerHTML==""){
return false
}
}

return true
}

function reiniciar(){

let casas=document.getElementsByClassName("casa")

for(let i=0;i<casas.length;i++){
casas[i].innerHTML=""
}

jogador="X"
jogoAtivo=true
}
