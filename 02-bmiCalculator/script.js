const form = document.querySelector("form");
const result = document.querySelector(".result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);

  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid weight";
  } else if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter a valid height";
  } else {
    let status;
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);

    if (bmi < 18.5) {
      status = "You are Underweight";
    } else if (bmi == 18.5 || bmi < 24.9) {
      status = "You have a Healthyweight";
    } else if (bmi == 25.0 || bmi < 29.9) {
      status = "You are Overweight";
    } else if (bmi >= 30.0) {
      status = "You have an Obesity";
    } else {
      status = "Invalid Status";
    }

    result.innerHTML = `<span>Your BMI index is ${bmi} and ${status}</span>`;
  }
});
