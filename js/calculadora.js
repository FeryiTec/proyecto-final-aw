function TomarValor(x) {
    console.log("By Fercho5506")
	document.getElementById('Result').innerHTML += x;
}

function LimpiarEntrada() {
	document.getElementById('Result').innerHTML = "";
}

function CalcularResultado() {
	var result = eval(document.getElementById('Result').innerHTML);
	document.getElementById('Result').innerHTML = result;
}

// Números
var cero = document.getElementById('cero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

// Operadores
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var equal = document.getElementById('equal');
var deleteN = document.getElementById('Delete');

// Funciones
one.addEventListener("click", function(){
    TomarValor(1);
})
two.addEventListener("click", function(){
    TomarValor(2);
})
three.addEventListener("click", function(){
    TomarValor(3);
})
four.addEventListener("click", function(){
    TomarValor(4);
})
five.addEventListener("click", function(){
    TomarValor(5);
})
six.addEventListener("click", function(){
    TomarValor(6);
})
seven.addEventListener("click", function(){
    TomarValor(7);
})
eight.addEventListener("click", function(){
    TomarValor(8);
})
nine.addEventListener("click", function(){
    TomarValor(9);
})
plus.addEventListener("click", function(){
    TomarValor("+");
})
minus.addEventListener("click", function(){
    TomarValor("-");
})
multiply.addEventListener("click", function(){
    TomarValor("*");
})
divide.addEventListener("click", function(){
    TomarValor("/");
})


equal.addEventListener("click", function(){
    CalcularResultado();
})

deleteN.addEventListener("click", function(){
    LimpiarEntrada()
})