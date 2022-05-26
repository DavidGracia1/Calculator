var operandoa;
var operandob;
var operacion;


function init(){
    //variables
    var result=document.getElementById("result");
    var reset=document.getElementById("reset");
    var addition=document.getElementById("addition");
    var substration=document.getElementById("substration");
    var multiplication=document.getElementById("multiplication");
    var division=document.getElementById("division");
    var equal=document.getElementById("equal");
    var one=document.getElementById("one");
    var two=document.getElementById("two");
    var three=document.getElementById("three");
    var four=document.getElementById("four");
    var five=document.getElementById("five");
    var six=document.getElementById("six");
    var seven=document.getElementById("seven");
    var eigth=document.getElementById("eight");
    var nine=document.getElementById("nine");
    var cero=document.getElementById("cero");

    //Events
    one.onclick = function(e){
        result.textContent = result.textContent + "1";   
    }
    two.onclick = function(e){
        result.textContent = result.textContent + "2";   
    }
    three.onclick = function(e){
        result.textContent = result.textContent + "3";   
    }
    four.onclick = function(e){
        result.textContent = result.textContent + "4";   
    }
    five.onclick = function(e){
        result.textContent = result.textContent + "5";   
    }
    six.onclick = function(e){
        result.textContent = result.textContent + "6";   
    }
    seven.onclick = function(e){
        result.textContent = result.textContent + "7";   
    }
    eigth.onclick = function(e){
        result.textContent = result.textContent + "8";   
    }
    nine.onclick = function(e){
        result.textContent = result.textContent + "9";   
    }
    cero.onclick = function(e){
        result.textContent = result.textContent + "0";   
    }
    reset.onclick = function(e){
        resetear();
    }
    addition.onclick = function(e){
        operandoa= result.textContent;
        operacion= "+";
        limpiar();   
    }
    substration.onclick = function(e){
        operandoa= result.textContent;
        operacion= "-";
        limpiar();   
    }
    multiplication.onclick = function(e){
        operandoa= result.textContent;
        operacion= "*";
        limpiar();   
    }
    division.onclick = function(e){
        operandoa= result.textContent;
        operacion= "/";
        limpiar();   
    }
    equal.onclick = function(e){
        operandob= result.textContent;
        operacion= "+";
        resolver();   
    }
}
function limpiar(){
    result.textContent = "";
}
function reset(){
    result.textContent = "";
    operandoa=0;
    operandob=0;
    operacion="";
}
function solve(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    reset();
    result.textcontent = res;
}