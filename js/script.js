let uno = 1;
let due = 2;
let tre = 3;
let quattro = 4;
let cinque = 5;
let sei = 6;
let sette = 7;
let otto = 8;
let nove = 9;
let zero = 0;
let reset = '';
let punto = '.';
let operazione;
let parametro1;
let parametro2;
let parametro3;
function nov() {
document.getElementById('risultato').innerHTML += nove;    
}
function ott() {
    document.getElementById('risultato').innerHTML += otto;    
}
function sett() {
    document.getElementById('risultato').innerHTML += sette;    
}
function se() {
    document.getElementById('risultato').innerHTML += sei;    
}
function cinqu() {
    document.getElementById('risultato').innerHTML += cinque;    
}   
function quattr() {
    document.getElementById('risultato').innerHTML += quattro;    
}
function tr() {
    document.getElementById('risultato').innerHTML += tre;    
}                                                                                   
function du() {
    document.getElementById('risultato').innerHTML += due; 
}
function un() {
     document.getElementById('risultato').innerHTML += uno; 
     
} 
function zer() {
    document.getElementById('risultato').innerHTML += zero;    
}
function addizion() { 
    parametro1 = document.getElementById('risultato').innerHTML;
    document.getElementById('risultato').innerHTML = '' ;
    operazione = 'somma';
    
}
function men() {
    parametro1 = document.getElementById('risultato').innerHTML;
    document.getElementById('risultato').innerHTML = '' ;
    operazione = 'sottrazione';    
}
function molti() {
    parametro1 = document.getElementById('risultato').innerHTML;
    document.getElementById('risultato').innerHTML = '' ;
    operazione = 'moltiplicazione';   
}
function division() {
    parametro1 = document.getElementById('risultato').innerHTML;
    document.getElementById('risultato').innerHTML = '' ;
    operazione = 'divisione';  
}
function rese() {
    document.getElementById('risultato').innerHTML = reset;  
    parametro1 = 0;
    parametro2= 0;
    parametro3 = 0;
    operazione = '';

} 
function punt() {
    document.getElementById('risultato').innerHTML += punto;            
}
function totale() {
    parametro2 = document.getElementById('risultato').innerHTML;  
    if (operazione === 'somma') {
        parametro3 = parseFloat(parametro1) + parseFloat(parametro2);
        document.getElementById('risultato').innerHTML = parametro3;
    }  else if (operazione === 'moltiplicazione') {
        parametro3 = parseFloat(parametro1) * parseFloat(parametro2);
        document.getElementById('risultato').innerHTML = parametro3;
    }  else if (operazione === 'sottrazione') {
        parametro3 = parseFloat(parametro1) - parseFloat(parametro2);
        document.getElementById('risultato').innerHTML = parametro3;
    }  else if (operazione === 'divisione') {
        parametro3 = parseFloat(parametro1) / parseFloat(parametro2);
        document.getElementById('risultato').innerHTML = parametro3;
    } 
     
}

     