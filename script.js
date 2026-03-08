let jogador = "X"
let jogoAtivo = false
let contraMaquina = false
let dificuldade = "facil"

function modoJogador(){
contraMaquina = false
reiniciar()
document.getElementById("status").innerHTML = "Modo: 2 Jogadores"
}

function modoMaquina(){
contraMaquina = true
reiniciar()
document.getElementById("status").innerHTML = "Modo: Contra Máquina"
}

function setDificuldade(nivel){
dificuldade = nivel
document.getElementById("status").innerHTML = "Dificuldade: " + nivel
}

function jogar(casa,index){

if(casa.innerHTML != "" || !jogoAtivo){
return
}

casa.innerHTML = jogador

if(verificarVitoria()){
mostrarResultado("Jogador " + jogador + " venceu!")
jogoAtivo = false
return
}

if(verificarEmpate()){
mostrarResultado("EMPATE!")
jogoAtivo = false
return
}

jogador = jogador == "X" ? "O" : "X"

if(contraMaquina && jogador == "O"){
setTimeout(jogadaMaquina,400)
}

}

function jogadaMaquina(){

if(!jogoAtivo) return

if(dificuldade == "facil"){
jogadaAleatoria()
}

if(dificuldade == "medio"){
jogadaMedia()
}

if(dificuldade == "dificil"){
jogadaDificil()
}

if(verificarVitoria()){
mostrarResultado("Máquina venceu!")
jogoAtivo = false
return
}

if(verificarEmpate()){
mostrarResultado("EMPATE!")
jogoAtivo = false
return
}

jogador = "X"

}

function jogadaAleatoria(){

let casas = document.getElementsByClassName("casa")
let livres = []

for(let i=0;i<casas.length;i++){
if(casas[i].innerHTML == ""){
livres.push(i)
}
}

let escolha = livres[Math.floor(Math.random()*livres.length)]

casas[escolha].innerHTML = "O"

}

function jogadaMedia(){

let casas = document.getElementsByClassName("casa")

for(let i=0;i<casas.length;i++){

if(casas[i].innerHTML == ""){

casas[i].innerHTML = "O"

if(verificarVitoria()){
return
}

casas[i].innerHTML = ""

}

}

jogadaAleatoria()

}

function jogadaDificil(){

let casas = document.getElementsByClassName("casa")

let linhas = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

]

/* tentar ganhar */

for(let i=0;i<linhas.length;i++){

let a = linhas[i][0]
let b = linhas[i][1]
let c = linhas[i][2]

if(casas[a].innerHTML=="O" && casas[b].innerHTML=="O" && casas[c].innerHTML==""){
casas[c].innerHTML="O"
return
}

if(casas[a].innerHTML=="O" && casas[c].innerHTML=="O" && casas[b].innerHTML==""){
casas[b].innerHTML="O"
return
}

if(casas[b].innerHTML=="O" && casas[c].innerHTML=="O" && casas[a].innerHTML==""){
casas[a].innerHTML="O"
return
}

}

/* bloquear jogador */

for(let i=0;i<linhas.length;i++){

let a = linhas[i][0]
let b = linhas[i][1]
let c = linhas[i][2]

if(casas[a].innerHTML=="X" && casas[b].innerHTML=="X" && casas[c].innerHTML==""){
casas[c].innerHTML="O"
return
}

if(casas[a].innerHTML=="X" && casas[c].innerHTML=="X" && casas[b].innerHTML==""){
casas[b].innerHTML="O"
return
}

if(casas[b].innerHTML=="X" && casas[c].innerHTML=="X" && casas[a].innerHTML==""){
casas[a].innerHTML="O"
return
}

}

/* pegar centro */

if(casas[4].innerHTML==""){
casas[4].innerHTML="O"
return
}

/* pegar cantos */

let cantos = [0,2,6,8]

for(let i=0;i<cantos.length;i++){

if(casas[cantos[i]].innerHTML==""){
casas[cantos[i]].innerHTML="O"
return
}

}

/* jogada aleatória */

jogadaAleatoria()

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

let a = v[i][0]
let b = v[i][1]
let c = v[i][2]

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

let casas = document.getElementsByClassName("casa")

for(let i=0;i<casas.length;i++){

if(casas[i].innerHTML == ""){
return false
}

}

return true

}

function mostrarResultado(texto){

let tela = document.getElementById("resultado")
let textoTela = document.getElementById("textoResultado")

textoTela.innerHTML = texto

tela.style.display = "flex"

}

function reiniciar(){

let casas = document.getElementsByClassName("casa")

for(let i=0;i<casas.length;i++){
casas[i].innerHTML = ""
}

jogador = "X"
jogoAtivo = true

document.getElementById("resultado").style.display = "none"

}


