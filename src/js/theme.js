

const linkElement = document.querySelector('link[href="/src/css/dark-mode.css"]');
let enterElement = document.getElementById('enter-button');
let outputElement = document.getElementById('output');

if (enterElement && outputElement) {
    enterElement.addEventListener("click", () => {
      const screenCheck = document.getElementById('output').value;
      if (screenCheck === "0.0005839172505839173" || screenCheck === "Batsave") {
        document.getElementById('output').value = "BATSAVE LE GOAT 🐐🐐🐐";
        console.log("BATSAVE LE GOAT 🐐🐐🐐");
        linkElement.href = "/src/css/special-mode.css";
      }
    });
}




document.addEventListener("change", function(event) {
  if (event.target.matches("#theme")) {
    if (event.target.checked) {
      console.log("Light Mode Activated ☀️");
      linkElement.href = "./src/css/light-mode.css";
    } 
     else {
      console.log("Dark Mode Activated 🌙");
      linkElement.href = "/src/css/dark-mode.css";
    }
    
  } 

});

