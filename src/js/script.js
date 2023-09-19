
let firstValue = parseInt(prompt("Premier chiffre"));
let operator = prompt("Operateur logique") ;
let secondValue = parseInt(prompt("Second chiffre")) ;
let result;

console.log("calcul = " + firstValue + operator + secondValue);

if (operator === '+') {result = (firstValue + secondValue);} 
else if (operator === '-') {result = (firstValue - secondValue);} 
else if (operator === '*') {result = (firstValue * secondValue);} 
else if (operator === '/') {result = (firstValue / secondValue);}
else { result = "Invalid Operator"};



console.log("resultat = "+ result);

