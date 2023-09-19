
function calcul() 
{ 
    let screen = document.getElementById("output").value 
    let result = eval(screen) 
    document.getElementById("output").value = result 
} 

function send(val) 
{ 
    document.getElementById("output").value+=val 
} 
function errase() 
{ 
    document.getElementById("output").value = "" 
} 


/* Concepte de la calculatrice V2
 * lorsque l'on appuie sur un bouton, afficher/ajouter la valeur dans une variable
 * qui sera afficher sur l'écran
 * a l'appuie sur la touche '=' récupéré le contenu du screen et faire le calcul 
 * effacer le screen et afficher le resultat ! 
 */
