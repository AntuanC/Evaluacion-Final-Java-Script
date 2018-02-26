var cl = console.log

//DEFINICION DE VARIABLES:
var num1 ;
var num2 ;
var tpOper = "";

var disp = document.getElementById("display")
var on = document.getElementById("on")
var sign = document.getElementById("sign")
var n0 = document.getElementById("0")
var n1 = document.getElementById("1")
var n2 = document.getElementById("2")
var n3 = document.getElementById("3")
var n4 = document.getElementById("4")
var n5 = document.getElementById("5")
var n6 = document.getElementById("6")
var n7 = document.getElementById("7")
var n8 = document.getElementById("8")
var n9 = document.getElementById("9")
var punto = document.getElementById("punto")
var mas = document.getElementById("mas")
var menos = document.getElementById("menos")
var por = document.getElementById("por")
var dividido = document.getElementById("dividido")
var raiz = document.getElementById("raiz")
var igual = document.getElementById("igual")

// DEFINICION DE EVENTOS:
sign.addEventListener("click",tsign);
n0.addEventListener("click",t0);
n1.addEventListener("click",t1);
n2.addEventListener("click",t2);
n3.addEventListener("click",t3);
n4.addEventListener("click",t4);
n5.addEventListener("click",t5);
n6.addEventListener("click",t6);
n7.addEventListener("click",t7);
n8.addEventListener("click",t8);
n9.addEventListener("click",t9);
punto.addEventListener("click",pto);
mas.addEventListener("click",suma);
menos.addEventListener("click",resta);
por.addEventListener("click",multiplicacion);
dividido.addEventListener("click",divicion);
raiz.addEventListener("click",r2);
igual.addEventListener("click",rdo);
on.addEventListener("click",restab);

sign.addEventListener("mousedown",btnpqsign);
sign.addEventListener("mouseup",btngrsign);
n0.addEventListener("mousedown",btnpqn0);
n0.addEventListener("mouseup",btngrn0);
n1.addEventListener("mousedown",btnpqn1);
n1.addEventListener("mouseup",btngrn1);
n2.addEventListener("mousedown",btnpqn2);
n2.addEventListener("mouseup",btngrn2);
n3.addEventListener("mousedown",btnpqn3);
n3.addEventListener("mouseup",btngrn3);
n4.addEventListener("mousedown",btnpqn4);
n4.addEventListener("mouseup",btngrn4);
n5.addEventListener("mousedown",btnpqn5);
n5.addEventListener("mouseup",btngrn5);
n6.addEventListener("mousedown",btnpqn6);
n6.addEventListener("mouseup",btngrn6);
n7.addEventListener("mousedown",btnpqn7);
n7.addEventListener("mouseup",btngrn7);
n8.addEventListener("mousedown",btnpqn8);
n8.addEventListener("mouseup",btngrn8);
n9.addEventListener("mousedown",btnpqn9);
n9.addEventListener("mouseup",btngrn9);
punto.addEventListener("mousedown",btnpqpt);
punto.addEventListener("mouseup",btngrpt);
mas.addEventListener("mousedown",btnpqmas);
mas.addEventListener("mouseup",btngrmas);
menos.addEventListener("mousedown",btnpqmenos);
menos.addEventListener("mouseup",btngrmenos);
por.addEventListener("mousedown",btnpqpor);
por.addEventListener("mouseup",btngrpor);
dividido.addEventListener("mousedown",btnpqdivi);
dividido.addEventListener("mouseup",btngrdivi);
raiz.addEventListener("mousedown",btnpqraiz);
raiz.addEventListener("mouseup",btngrraiz);
igual.addEventListener("mousedown",btnpqigual);
igual.addEventListener("mouseup",btngrigual);
on.addEventListener("mousedown",btnpqon);
on.addEventListener("mouseup",btngron);

//DEFINICION DE FUNCIONES DE ESTILO:
function btnpqsign (){sign.style="width:18%;height:51.47px;display:flex"}
function btngrsign (){sign.style="width:22%;height:62.91px"}
function btnpqn0 (){n0.style="width:25%;height:54.23px;display:flex"}
function btngrn0 (){n0.style="width:29%;height:62.91px"}
function btnpqn1 (){n1.style="width:25%;height:54.23px;display:flex"}
function btngrn1 (){n1.style="width:29%;height:62.91px"}
function btnpqn2 (){n2.style="width:25%;height:54.23px;display:flex"}
function btngrn2 (){n2.style="width:29%;height:62.91px"}
function btnpqn3 (){n3.style="width:25%;height:54.23px;display:flex"}
function btngrn3 (){n3.style="width:29%;height:62.91px"}
function btnpqn4 (){n4.style="width:18%;height:51.47px;display:flex"}
function btngrn4 (){n4.style="width:22%;height:62.91px"}
function btnpqn5 (){n5.style="width:18%;height:51.47px;display:flex"}
function btngrn5 (){n5.style="width:22%;height:62.91px"}
function btnpqn6 (){n6.style="width:18%;height:51.47px;display:flex"}
function btngrn6 (){n6.style="width:22%;height:62.91px"}
function btnpqn7 (){n7.style="width:18%;height:51.47px;display:flex"}
function btngrn7 (){n7.style="width:22%;height:62.91px"}
function btnpqn8 (){n8.style="width:18%;height:51.47px;display:flex"}
function btngrn8 (){n8.style="width:22%;height:62.91px"}
function btnpqn9 (){n9.style="width:18%;height:51.47px;display:flex"}
function btngrn9 (){n9.style="width:22%;height:62.91px"}
function btnpqpt (){punto.style="width:25%;height:54.23px;display:flex"}
function btngrpt (){punto.style="width:29%;height:62.91px"}
function btnpqmas (){mas.style="width:85%;height:95%;display:flex"}
function btngrmas (){mas.style="width:90%;height:100%"}
function btnpqmenos (){menos.style="width:18%;height:51.47px;display:flex"}
function btngrmenos (){menos.style="width:22%;height:62.91px"}
function btnpqpor (){por.style="width:18%;height:51.47px;display:flex"}
function btngrpor (){por.style="width:22%;height:62.91px"}
function btnpqdivi (){dividido.style="width:18%;height:51.47px;display:flex"}
function btngrdivi (){dividido.style="width:22%;height:62.91px"}
function btnpqraiz (){raiz.style="width:18%;height:51.47px;display:flex"}
function btngrraiz (){raiz.style="width:22%;height:62.91px"}
function btnpqigual (){igual.style="width:25%;height:54.23px;display:flex"}
function btngrigual (){igual.style="width:29%;height:62.91px"}
function btnpqon (){on.style="width:18%;height:51.47px;display:flex"}
function btngron (){on.style="width:22%;height:62.91px"}

// DEFINICION DE FUNCIONES NUMERICAS:
function tsign(){switch (disp.textContent){case "0": disp.innerHTML="0"; break; default: function sgno (){num1 = parseFloat(disp.textContent)*-1;disp.innerHTML=num1;};sgno();}}
function t1(){if(disp.textContent.length <8){ switch (disp.textContent){case "0": disp.innerHTML="1"; break; default: disp.innerHTML=disp.textContent+"1";}}}
function t2(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="2"; break; default: disp.innerHTML=disp.textContent+"2";}}}
function t3(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="3"; break; default: disp.innerHTML=disp.textContent+"3";}}}
function t4(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="4"; break; default: disp.innerHTML=disp.textContent+"4";}}}
function t5(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="5"; break; default: disp.innerHTML=disp.textContent+"5";}}}
function t6(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="6"; break; default: disp.innerHTML=disp.textContent+"6";}}}
function t7(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="7"; break; default: disp.innerHTML=disp.textContent+"7";}}}
function t8(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="8"; break; default: disp.innerHTML=disp.textContent+"8";}}}
function t9(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="9"; break; default: disp.innerHTML=disp.textContent+"9";}}}
function t0(){if(disp.textContent.length <8){switch (disp.textContent){case "0": disp.innerHTML="0"; break; default: disp.innerHTML=disp.textContent+"0";}}}
function pto(){(disp.textContent.match(/[.]/g) === null)? disp.innerHTML=disp.textContent+"." : disp.innerHTML=disp.textContent}

// DEFINICION DE FUNCIONES LOGICAS:
function suma(){num1 = parseFloat(disp.textContent); limpiar(); tpOper = "suma";}
function resta(){num1 = parseFloat(disp.textContent); limpiar(); tpOper = "resta";}
function multiplicacion(){num1 = parseFloat(disp.textContent); limpiar(); tpOper = "multi";}
function divicion(){num1 = parseFloat(disp.textContent); limpiar(); tpOper = "divi";}
function r2(){
    num1 = parseFloat(disp.textContent); 
    function rdor2 (){
        num1 = Math.sqrt(num1).toFixed(5); 
        document.querySelector("#display").innerHTML= num1 };
        rdor2();
    }
function limpiar (){document.querySelector("#display").innerHTML="";}
function rdo(){
    switch (tpOper){
        case "suma":
            num2 = parseFloat(document.querySelector("#display").textContent);
            document.querySelector("#display").innerHTML= num1+num2;
            break;
        case "resta":
            num2 = parseFloat(document.querySelector("#display").textContent);
            document.querySelector("#display").innerHTML= num1-num2;
            break;
        case "multi":
            num2 = parseFloat(document.querySelector("#display").textContent);
            document.querySelector("#display").innerHTML= num1*num2;
            break;
        case "divi":
            num2 = parseFloat(document.querySelector("#display").textContent);
            document.querySelector("#display").innerHTML= num1/num2;
            break;
    }
}
function restab(){num1 = 0; disp.innerHTML=num1; num2 = 0; disp.innerHTML=num2; tpOper = "";}