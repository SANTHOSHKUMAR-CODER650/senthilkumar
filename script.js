let current = "";

function press(val) {
    current += val;
    document.getElementById("display").value = current;
}

function calculate() {
    try {
        current = eval(current).toString();
        document.getElementById("display").value = current;
    } catch (e) {
        document.getElementById("display").value = "Error";
        current = "";
    }
}

function clearDisplay() {
    current = "";
    document.getElementById("display").value = "";
}