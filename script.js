console.log('Hello!');

const body = document.body
const d = new Date();

if (d.getHours() > 20 || d.getHours() < 8) {
    body.style["backgroundColor"] = "black";
    body.style["color"] = "white"
} else {
    body.style["backgroundColor"] = "#48494b";
    body.style["color"] = "black"
}
