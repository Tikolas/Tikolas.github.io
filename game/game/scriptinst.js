var score = 0;
var updating = 1;
var upd = 1;
var minus = 1;
var call = 1;
var levels = 0;
score= +localStorage.getItem('score');updating= +localStorage.getItem('level');call= +localStorage.getItem('mine');
if (!(!isNaN(parseFloat(score)) && isFinite(score))) score = 0
window.onunload = () => { if(score==0){score=1;call=1;updating=1}
  localStorage.setItem('score', score);localStorage.setItem('level', updating);localStorage.setItem('mine', call)};
teg();kolim();level();min();

function teg () {
  document.getElementsByTagName("h1")[0].firstChild.data = score + " Ksc";
}
function min(){
	document.getElementById("mimi").innerHTML = "Сила Майнинга: (" + call + ")";
}
function kolim(){
	setTimeout("plusauto2()", 0);
}
function osc(){
	score= score/1000000000000000000;
}
//+$
//Прокачка
function update() {
  score = score + updating;
teg();
};

function update1() {
  score = score + 150;
  updating = 2;
  teg();
  if1();
  level();
}
function update2() {
  score = score - 250;
  updating += 3;
  teg();
  if1();
  level();
}
function update3() {
  score = score - 500;
  updating += 10;
  teg();
  if1();
  level();
}

//ограничение кредита
function opa(){
	if(score>1000){score=0;}
}
function if1 () {
  if (score < -0) {
    document.write('<title>Game over</title><link rel="stylesheet" href="./style.css"><link rel="icon" href="img/mouse.png"><main><h2>Вы проиграли, нажмите кнопку начать<a href=""><button onclick="nan()">Начать заново</button></h2></main></a>');
  }
}
function if2 () {
  if (score == 2)  {
    document.write('<title>Game over</title><link rel="stylesheet" href="./style.css"><link rel="icon" href="img/mouse.png"><main><h2>Вы Выиграли, нажмите кнопку начать<a href=""><button>Начать заново</button></h2></main></a>');
  }
}
function menuu(){
if(score > 500)if(updating > 1){document.getElementById("demo").innerHTML = '<style>body{background:red}</style><h1>Kook</h1>';}else{document.getElementById("demo").innerHTML = '<style>body{background:black;color:white}</style><h1>Kook</h1>'};
}
window.onload = function () {
    var more = document.getElementById('switch');
    more.onclick = function() {
        if (this.innerHTML=='<style>body{background:black;color:white}</style><h2>On</h2>') this.innerHTML = '<style>body{background-color:white}</style><h1>Off</h1>';
        else this.innerHTML = '<style>body{background:black;color:white}</style><h2>On</h2>';
        return false;
    }
}
//work
//вызов автокликера для его работы
function plusauto2 () {
  teg();
  setTimeout("auto2()", 1000);
}
function auto2 () {
  score += call;
  setTimeout("plusauto2()", 0);
  teg();
}
//временная пасхалка\\
function pashalka () {
  score += 10000;
  teg();
}
function level () {
  document.getElementsByTagName("h3")[0].firstChild.data = "Сила клика: " + updating;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var example = document.getElementById("example");
var random = rand(1, 1000);
example.innerHTML = random; 
