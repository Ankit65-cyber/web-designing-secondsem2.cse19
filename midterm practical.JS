function generateTable() {
    let num = document.getElementById("numberInput").value;
    let resultDiv = document.getElementById("result");

    if (num === "") {
        resultDiv.innerHTML = "Please enter a number!";
        return;
    }

    let output = "<h3>Multiplication Table of " + num + "</h3>";

    for (let i = 1; i <= 10; i++) {
        output += num + " × " + i + " = " + (num * i) + "<br>";
    }

    resultDiv.innerHTML = output;
}