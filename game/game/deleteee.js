
    function liveCounter()
    {
        var element = document.getElementById("example");
        //alert(1);
   
        var cur = +new Date() / 1000;
        cur = cur + 0;
        var cnt = Math.floor(cur);
        var s = "";
        
        while (cnt > 0) {
            var ost = cnt % 1000;
            cnt = Math.floor(cnt / 1000);
            if (cnt < 1000) {
                s = ost + " " + s;
            }
            else {
                if (ost < 10) s = "00" + ost + " " + s;
                else if (ost < 100) s = "0" + ost + " " + s;
                else s = ost + " " + s;
            }
        }
        
        element.innerHTML = s;        
        setTimeout(liveCounter, 1000);
    }
    liveCounter();
	
	
	
	function clickBtn() {
  score = score + updating;
  teg();
  if1();
  new Audio('sound.mp3').play(); return false;
}
function clickBtn2() {
  score = score - updating;
  teg();
  if1();
  if2();
}

function auto() {
  score = score - 10000;
  teg();
  if1();
  setTimeout("plusauto()", 1000);
}
function auto() {
  score = score - 10000;
  teg();
  if1();
  setTimeout("plusauto2()", 1);
}

function plusauto () {
  score += updating;
  teg();
  setTimeout("auto1()", 1000);
}
function auto1 () {
  score += updating;
  setTimeout("plusauto()", 1000);
  teg();
  //вызов автокликера для его работы2
}
function m(n,d){x=(''+n).length,p=Math.pow,d=p(10,d)
x-=x%3
return Math.round(n*d/p(10,x))/d+ " kMGTPE"[x/3]}



function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "k", "m", "b", "t" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}


var pow = Math.pow, floor = Math.floor, abs = Math.abs, log = Math.log;
var abbrev = 'kmb'; // could be an array of strings: [' m', ' Mo', ' Md']
function round(n, precision) {
    var prec = Math.pow(10, precision);
    return Math.round(n*prec)/prec;
}
function format(n) {
    var base = floor(log(abs(n))/log(1000));
    var suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n/pow(1000,base),2)+suffix : ''+n;
}



function ter(){
	document.write('<title>Кликер</title><script src="./Кликер_files/scriptinst.js"></script><style>h1{background:blue;color:white;}a{text-decoration:none}.glav{border:2px black solid;font-size:20px;}.ms{padding-right:35px;font-size:20px;font-family:arial;}.act{border-bottom:2px orange solid;border-radius:10%}@media (max-width:1000px) {.ms{font-size:13px;padding-right:15px;}}</style><a href=""><h1><<<</h1></a><a onclick="kola()"id="kola"class="ms">Словав долго</a><a onclick="kolaa()"id="kolaa"class="ms">Словав имы</a><a onclick="kolaaa()"id="kolaaa"class="ms">Словав шои</a>')
}
function kola(){
	document.getElementById("kola").innerHTML = '<a class="act">Словав долго</a><p class="glav">ss</p>';
}
function kolaa(){
	document.getElementById("kolaa").innerHTML = '<hr><a class="act">Словав имы</a><p class="glav">ss</p>';
}
function kolaaa(){
	document.getElementById("kolaaa").innerHTML = '<hr><a class="act">Словав шои</a><p class="glav">ss</p>';
}
//work
function work(){
	document.write('<title>Кликер</title><script src="./Кликер_files/scriptinst.js"></script><style>h1{background:blue;color:white;}a{text-decoration:none}.glav{border:2px black solid;font-size:20px}</style><a href=""><h1><<<</h1></a><p class="glav"onclick="shop()"id="shop">Work</p><p class="glav"onclick="shope()"id="shope">Work2</p>')
}
function shop(){
	document.getElementById("shop").innerHTML = '<a>Work</a><hr><P>зафти на сайт</P>';
}
function shope(){
	document.getElementById("shope").innerHTML = '<a>Work2</a><hr><p>Зарабтоат</p>';
}
function menu(){
document.write('<title>Кликер</title><script src="./Кликер_files/scriptinst.js"></script><style>h1{background:blue;color:white;}a{text-decoration:none}.glav{border:2px black solid}</style><a href=""><h1><<<</h1></a> <p class="glav">ss</p><br><input id="btn1" type="button" value="Автокликер" onclick="auto2()"><button onclick="clen()">Запомнить</button>')
}

function reboot () {
  alert("Ваш уровень прокачки " + updating + ". Ваш баланс " + score + " .");
}
function dialog () {
  minus = parseInt(prompt("На сколько уровней прокачать(x*50, и это минус ваши деньги)", 5));
  dialog1();
  teg();
}
function dialog1 () {
	score -= minus;
  updating += minus * 1;
  teg();
  document.getElementsByTagName("h3")[0].firstChild.data = "Сила клика: " + updating;
  if1();
}