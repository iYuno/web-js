
// Проверка На Пустоту и Корректность

	
function checkString(a)
{
	if ((a == null || a == "" || a == undefined ) && a!= 0) {
		return false;
	}
	return true;
}

function checkNumber(x)
{
	if (checkString(x))
	{
		console.log(x);
		if (isNaN(x)) return false;
		else return true;
	}
}


// Задание  С Именем

function name_Save()
{
	let str = document.getElementById('Name_save').value;
	if (!this.checkString(str)) 
	{
		console.log("1");
	}
	else
	{
		localStorage.setItem("myName", str);
		//console.log(localStorage.getItem("myName"));
		document.getElementById('my_name').innerHTML = str;
	}
}


function nameLoad()
{
		document.getElementById("my_name").innerHTML = localStorage.getItem("myName");
}




// Задание С Треугольником

function triangle()
{
	let h = document.getElementById("h").value;
	let side = document.getElementById("side").value;


	if (checkNumber(h) && checkNumber(side))
	{
		let res = 0.5*h*side;
		document.getElementById("res_tri").innerHTML = res;
	}

}



// Задание Со Сравнением Строк

function eq_String()
{
	let s1 = document.getElementById("String1").value;
	let s2 =  document.getElementById("String2").value;


	if (checkString(s1) && checkString(s2))
	{
		if (s1.length == s2.length) 
		{
			document.getElementById("res_string").innerHTML = "Строки Ровны";
		}
		else
			document.getElementById("res_string").innerHTML = "Строки Не Ровны";
	}
}


// Задание С Нахождением Максимума и Минимума в Массиве

let maxmin = new Array();

function add_Value()
{
	

	let number = document.getElementById("for_max").value;
		if(checkNumber(number))
		{
			if (maxmin.length == 5) maxmin.shift();

			console.log(maxmin.push(Number(number)));
			document.getElementById("var").innerHTML = "Ваши числа "+maxmin;
			//console.log(maxmin);
		}
	document.getElementById("for_max").value = "";
}

function findMAxMin(){
	if (maxmin.length == 0) document.getElementById("res_max").innerHTML = "Вы ничего не ввели";
	else
	{
		let max = Math.max.apply(null, maxmin);
		let min = Math.min.apply(null, maxmin);

		document.getElementById("res_max").innerHTML = "Максимальное Число " +  max + "  Минимальное " + min;
	}
}



// Таймер

let hour;
let minute;
let second;
let timeinterv;
let isActive = false;
let isPause = false;



function Tick()
{
	print_time();
	if (second == 0)
	{
		if (minute == 0) {

			if (hour == 0) {
				clearInterval(timeinterv);
				alert("Время Вышло");
				isActive = false;
			}
			else{

				hour--;
				minute = 59;

			}
		}

		else 
		{
			minute--;
			second = 59;
		}
	}
	
	else second--;
	
}

function print_time()
{
	let res = hour + " : ";
	if (minute < 10) res += " 0" + minute;
	else res += minute;
	res += " : ";
	if (second < 10) res += " 0" + second;
	else res += second;

	document.getElementById("time").innerHTML = res;
}

function start_time()
{
	if(!isActive)
	{

		hour = document.getElementById("hour").value;
		if (hour == "" || hour == null ) hour = 0;
		console.log(hour);

		minute = document.getElementById("minute").value;
		if (minute == "" || minute == null ) minute = 0;
		console.log(minute);

		second = document.getElementById("sec").value;
		if (second == "" || second == null ) second = 0;
		console.log(second);

		if (minute>=0 && second>=0 && hour>=0 && hour != undefined && minute != undefined  && second != undefined  )
		{

			if (second >= 60)
			{
				minute += Math.floor(second/60);
				second %= 60;
			}
			if(minute >= 60){
				hour += Math.floor(second/60);
				minute %= 60;
			}

			console.log(minute + " " + second);
			print_time();
			timeinterv=setInterval('Tick()', 1000);
			isActive = true;
			
			document.getElementById("hour").value = "";
			document.getElementById("minute").value = "";
			document.getElementById("sec").value = "";
		}
	}

}

function pause_unpause(){
	if (isActive == true)
	{

		if (isPause == false) {
			isPause = true;
			clearInterval(timeinterv);
			document.getElementById("pause_un").innerHTML = "Возобновить";
		}
		
		else{
			isPause = false;
			timeinterv=setInterval('Tick()', 1000);
			document.getElementById("pause_un").innerHTML = "Остановить";
		}
	}
}

function stop_time()
{
	minute = 0;
	second = 0;
	isPause = false;
	isActive = false;
	clearInterval(timeinterv);
	document.getElementById("time").innerHTML = "0 : 00";
}




// Тест


let test_finish = false;

function check_test()
{
	if(!test_finish)
	{
		let result = 0;
		let x = 0;
	    for (question = 1; question <= 10; question++) 
	    {
   
		  let q = document.getElementsByClassName("ans"+question);

			 for (i = 0; i < q.length; i++) 
			 {
				if (q[i].checked) 
				{
			   		if (q[i].value == "0") 	x++;
			  		else result++;
				}
		 	}	
		}	
		if (x+result == 10){
			color_test();
			document.getElementById("res_test").innerHTML = "Ваш Резаультат " + result + "/10 ";
			test_finish = true;
		}

		else  document.getElementById("res_test").innerHTML = "Вы не закончили тест";
	}

	else document.getElementById("res_test").innerHTML = "Вы уже решили тест";
   
}

function color_test()
{
	for (question = 1; question <= 10; question++) 
	{
   
		let q = document.getElementsByClassName("ans"+question);
		let l = document.getElementsByClassName("label"+question);

		for (i = 0; i < q.length; i++) 
		{
			if (q[i].value == "1") l[i].style= "color: green;";
			if (q[i].checked && q[i].value == "0")  l[i].style = "color: red;";
		}	

	}	
}




function plash_open()
{
	let date = new Date().now;
	let x = document.getElementById("pole");
	x.style = "height : 100%;";
	console.log(x);

	document.getElementById("p_data").innerHTML = "Сегодня "+new Date().getDate(date) +" "+(new Date().getMonth(date)+1) +" "+ new Date().getFullYear(date);
	document.getElementById("p_name").innerHTML = "Ваше Имя "+localStorage["myName"];
}


function plash_closed()
{
	let x = document.getElementById("pole");
	x.style = "height : 0;";
}


function how(a){
	let q = document.getElementsByClassName("how_text");
	if (q[a].style.display == "block") q[a].style.display = "none";
	else  q[a].style.display = "block";
}