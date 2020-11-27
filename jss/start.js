a=5;
function sec() {
 a--;
  document.getElementById('a').innerHTML=a;
  if(a==0){document.location.href="head.html";}
}
function cancel(){a= -1;}
setInterval(sec, 1000);