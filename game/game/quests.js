leveli();
function leveli(){
	if(score > 1400){document.getElementById("ds").innerHTML = 'Перейди на 1 лвл'};
		if(score > 1500){document.getElementById("ds").innerHTML = 'Перейди на 2 лвл<hr><button onclick="get()"><h1>Получить</h1></button>'};
		if(score > 1670){document.getElementById("ds").innerHTML = 'Перейди на 3 лвл<hr>'};
}
function get(){
	document.write("KOSKDS");
}
