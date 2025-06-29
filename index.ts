const firstInput = document.getElementById("firstInput") as HTMLInputElement;

const secondInput = document.getElementById("secondInput") as HTMLInputElement;

const buttonELement = document.querySelector("button")!;

function addNumber(num1: number, num2: number) {
  return num1 + num2;
}

function addValue(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
}

buttonELement.addEventListener("click", () => {
  const x = firstInput.value;
  const y = secondInput.value;
  const resultInt = addValue(+x, +y);
  const resultString = addValue(x, y);
  console.log(resultInt);
  console.log(resultString);
});
