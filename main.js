var splashTypes = [
    "Your Search Is Private!",
    "Welcome!",
    "New: Oogle News",
    "bookmark this site!",
    "Knockoff Google",
    "New: Oogle Games",
    "Install to your PC"
];
let splashes = splashTypes[Math.floor(Math.random() * splashTypes.length)];
var splash = document.getElementById("splashtext");
splash.innerHTML = splashes;
let title = [Math.floor(Math.random() * 100)];
if (title == 1) {
    document.getElementById("title").innerHTML = "Google Knockoff";
}