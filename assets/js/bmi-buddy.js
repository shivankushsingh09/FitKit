// if (true) {
// ....
// } else if (true) {

// } else if (true) {

// } else {

// }

function calculateBmiForMale(calculatedBmi) {
  if (calculatedBmi < 18.5) {
    return "Underweight";
  } else if (calculatedBmi < 25) {
    return "Normal";
  } else if (calculatedBmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// for testing purpose
// console.log(calculateBmiForMale(17));
// console.log(calculateBmiForMale(20));
// console.log(calculateBmiForMale(28));
// console.log(calculateBmiForMale(32));

function calculateBmiForFemale(calculatedBmi) {
  if (calculatedBmi < 18) {
    return "Underweight";
  } else if (calculatedBmi < 24) {
    return "Normal";
  } else if (calculatedBmi < 29) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// runing tests for female category
// console.log(calculateBmiForFemale(16));
// console.log(calculateBmiForFemale(22));
// console.log(calculateBmiForFemale(27));
// console.log(calculateBmiForFemale(29));

function calculateCategory(calculatedBmi, gender) {
  if (gender === "male") {
    return calculateBmiForMale(calculatedBmi);
  } else {
    return calculateBmiForFemale(calculatedBmi);
  }
}

function calculateBmi() {
  const weightElement = document.getElementById("weight");
  const heightElement = document.getElementById("height");
  const genderElement = document.getElementById("gender");
  const resultElement = document.getElementById("bmiResult");

  const weight = parseFloat(weightElement.value);
  const height = parseFloat(heightElement.value) / 100;
  const gender = genderElement.value;

  if (weight <= 0 || height <= 0) {
    resultElement.innerText = "Please enter valid weight and height.";
    return;
  }

  const bmi = weight / (height * height);
  const finalBmi = bmi.toFixed(2);
  const category = calculateCategory(bmi, gender);
  resultElement.innerText = "BMI: " + finalBmi + " - " + category;
}

const calculateBtnElement = document.getElementById("calculateBtn");
calculateBtnElement.addEventListener("click", calculateBmi);
