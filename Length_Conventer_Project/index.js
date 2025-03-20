const cmInput = document.getElementById("input")
const result = document.getElementById("result")

function convert(){
    const cmValue = cmInput.value;
    const inchVal = cmValue/2.54
    result.innerHTML = `Result is: ${inchVal.toFixed(3)} inches`;
}