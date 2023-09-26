const form = document.querySelector("form");
const result = document.querySelector("#result");
const status = document.querySelector("#status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = Number(document.querySelector("#weight").value);
  const height = Number(document.querySelector("#height").value);

  const bmi = weight / Math.pow(height / 100, 2);
  result.textContent = `BMI: ${bmi.toFixed(1)}`;

  if (bmi < 18.5) {
    status.textContent = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    status.textContent = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    status.textContent = "Overweight";
  } else {
    status.textContent = "Obesity";
  }
});
