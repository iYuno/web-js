function checkString(a)
{
	/*if (a == null || a == "" || a == undefined ) {
		return false;
	}
    return true;*/
    return !(a == null || a == "" || a == undefined );
}


let active = false;
let strings = new Array();

function addString(){
    let str = document.getElementById("Number1").value;
    if (checkString(str)){
        strings.push(str);
        let p = document.createElement("p");
        p.innerText = str;
        let x = document.getElementsByClassName("res_string");
        x[0].appendChild(p);
        document.getElementById("Number1").value = "";
    }
    else alert ("Вы не ввели строку, либо ввели её некорректно");
}

function findMaxString(){
    let max = strings[0];
    for(i =1; i<strings.length; i++){
        if (max.length < strings[i].length) max = strings[i];
    }
    console.log(max);
    let p = document.getElementById("res1");
    p.innerText = max;
}

function clearString(){
    let x = document.getElementsByClassName("res_string");
    let p = document.querySelectorAll("div.res_string p");
    for(i = 0; i<p.length; i++)
        x[0].removeChild(p[i]);
}



let ch;
let stringa;

function finnChar(){
    stringa =String (document.getElementById("Number2").value);
    //let arr = stringa.split("");
    let leng = 0;
    let p;
    //console.log(str);
    //console.log(a);
    if(checkString(stringa)){
        for(i = 0; i<stringa.length; i++){
            let a = stringa[i];
            let l =1;
            for (j = i+1; j<stringa.length; j++){
                if (stringa[j]==a){
                    l++;
                    //console.log(l);
                }

            }
            if (l>leng) {
                //console.log(l);
                //console.log(leng);
                leng = l;
               //l = 1;
                ch = a;
            }
            //console.log(i);
        }
        //console.log(stringa.length);
        if (document.querySelectorAll("div.res_char p").length == 0){
            p = document.createElement("p");
            p.innerHTML = ch;
            let x = document.getElementsByClassName("res_char");
            x[0].appendChild(p);
        }
        else{
            document.querySelectorAll("div.res_char p")[0].innerHTML = ch;
        }
        document.getElementById("Number2").value = "";
        document.getElementById("string").innerHTML = stringa;
    }
    else alert ("Вы не ввели строку, либо ввели её некорректно");
}

function clearChar(){
    ch = null;
    stringa = "";
    document.getElementById("string").innerHTML = "";
    let p = document.querySelectorAll("div.res_char p");
    let x = document.getElementsByClassName("res_char");
        x[0].removeChild(p[0]);
}



function removeChar(){
    let c = document.getElementById("Number3").value;
    if (checkString(c) && c.length == 1){
        stringa = String(stringa);
        let s =stringa.replace(new RegExp(ch, 'g'), c);
        let p = document.createElement("p");
        p.innerText = s;
        let x = document.getElementsByClassName("new_string");
        x[0].appendChild(p);
        document.getElementById("Number3").value = "";
    }
    else alert ("Вы не ввели символ, либо ввели больше одного символа");
}




function isAnagramma(){
    let str1 = String(document.getElementById("Number4_1").value);
    let str2 = String(document.getElementById("Number4_2").value);



    if (checkString(str1) && checkString(str2)){
        let arr1 = str1.split("").sort().join("");
        let arr2 = str2.split("").sort().join("");
        let isAnagramma = true;
        if (arr1.length == arr2.length){
            for (i=0; i<arr2.length ; i++){
                if(arr1[i]!= arr2[i]) {
                    isAnagramma = false;
                    break;
                }
            }
        }else isAnagramma = false;
        document.getElementById("anagramma").innerHTML = isAnagramma;
        

    } 
    else alert ("Введите строки корректно");
    
}