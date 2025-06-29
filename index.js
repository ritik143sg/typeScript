var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");
var buttonELement = document.querySelector("button");
function addNumber(num1, num2) {
    return num1 + num2;
}
function addValue(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
}
buttonELement.addEventListener("click", function () {
    var x = firstInput.value;
    var y = secondInput.value;
    var resultInt = addValue(+x, +y);
    var resultString = addValue(x, y);
    console.log(resultInt);
    console.log(resultString);
});
