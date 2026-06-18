let fontSize = 16;
let isVisible = true;

function changeHeading() {
    let text = document.getElementById("inputText").value;
    if (text !== "") {
        document.getElementById("heading").innerText = text;
    }
}

function changeBackground() {
    let colors = ["#f0f8ff", "#ffe4e1", "#e6ffe6", "#fffacd"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("heading").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    let para = document.getElementById("para");
    isVisible = !isVisible;
    para.style.display = isVisible ? "block" : "none";
}

function resetPage() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#f0f8ff";
    document.getElementById("heading").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";
    document.getElementById("inputText").value = "";
    fontSize = 16;
    isVisible = true;
}