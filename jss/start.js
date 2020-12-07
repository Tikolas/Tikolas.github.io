a=5;
function sec() {
 a--;
  document.getElementById('a').innerHTML=a;
  if(a==0){document.location.href="index.html";}
}
function cancel(){a= -1;}
setInterval(sec, 1000);