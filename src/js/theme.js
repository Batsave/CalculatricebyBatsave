const linkElement = document.querySelector('link[href="/src/css/dark-mode.css"]');

document.addEventListener("change", function(event) {
  if (event.target.matches("#theme")) {
    if (event.target.checked) {
      console.log("Light Mode Activated ☀️");
      linkElement.href = "./src/css/light-mode.css";
    } else {
      console.log("Dark Mode Activated 🌙");
      linkElement.href = "/src/css/dark-mode.css";
    }
  }
});
