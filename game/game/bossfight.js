var health = 1000000000000000;
var koki2=0;
health= +localStorage.getItem('hp');
koki2= +localStorage.getItem('1');
boss();
function boss(){
	if(health==0){health=1000000000000000}
	document.getElementById("boss").innerHTML = health + "hp";localStorage.setItem('hp', health);
}
function damage(){health = health-updating;boss();}

var nij = +localStorage.getItem('1');
var cur = +new Date();
var koki = Math.floor(cur/10000);

function cashback(){mathi=koki-koki2;if(koki>koki2){score=score+Math.floor(mathi/5);cur2= +new Date();koki2 = Math.floor(cur2/10000);localStorage.setItem('1', koki2)}if(mathi>100000000){score=score-Math.floor(mathi/5)};};
