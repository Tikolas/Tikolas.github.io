ves();
function ves(){
if(updating < 5){mnb=500;}
if(updating < 10000){mnb=10000;}
if(updating > 10000){mnb=15000;}
if(updating > 20500){mnb=100000;}
if(updating > 30500){mnb=1000000;}
if(updating > 100000){mnb=1000000000;}
if(updating > 500000){mnb=100000000000;}
document.getElementById("vess").innerHTML = "Прокачать силу клика на 1 за " + mnb + " Ksc";
}
var koo = 100000-score;
function update4() {
  if(score > 100000){score = score - 100000;
  call += 1;}else{alert("Не хватает " + koo + " Ksc");}
  teg();
  level();
  min();
}

var ko = mnb-score;
function update5() {
	var ko = mnb-score;
  if(score > mnb){score = score - mnb;
  updating += 1;}else{alert("Не хватает " + ko + " Ksc");}
  teg();
  level();
  ves();
}