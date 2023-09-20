

function calcul() 
{ 
    let screen = document.getElementById("output").value;
    let result = eval(screen);
    document.getElementById("output").value = result; 
    
   
} 

function send(val) 
{ 
    document.getElementById("output").value+=val 
} 
function erase() 
{ 
    document.getElementById("output").value = ""
   
} 

