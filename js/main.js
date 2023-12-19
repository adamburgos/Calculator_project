function appendToDisplay(value){
    var display = document.getElementById("display");
    display.value += value;
}

function clearToDisplay(){
    var display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}