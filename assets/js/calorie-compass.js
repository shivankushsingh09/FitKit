function calculatedCalorieForMale(age, activity) {
  if (age <= 18) {
    if (activity === "sedentary") return 2000;
    if (activity === "light") return 2200;
    if (activity === "active") return 2500;
  } else if (age <= 60) {
    if (activity === "sedentary") return 2000;
    if (activity === "light") return 2200;
    if (activity === "active") return 2500;
  } else if (age > 60) {
    if (activity === "sedentary") return 2000;
    if (activity === "light") return 2200;
    if (activity === "active") return 2500;
  }
  return 0;
}

function calculatedCalorieForFemale(age, activity) {
  if (age <= 18) {
    if (activity === "sedentary") return 1800;
    if (activity === "light") return 2000;
    if (activity === "active") return 2200;
  } else if (age <= 60) {
    if (activity === "sedentary") return 1800;
    if (activity === "light") return 2000;
    if (activity === "active") return 2200;
  } else if (age > 60) {
    if (activity === "sedentary") return 1800;
    if (activity === "light") return 2000;
    if (activity === "active") return 2200;
  }
  return 0;
}

function calculatedCalories(age, gender, activity) {
  if (gender === "male") {
    return calculatedCalorieForMale(age, activity);
  } else if (gender === "female") {
    return calculatedCalorieForFemale(age, activity);
  }
  return 0;
}

function calculateCalorie() {
  const ageElement = document.getElementById("age");
  const genderElement = document.getElementById("gender");
  const activityElement = document.getElementById("activity");
  const resultElement = document.getElementById("calorieResult");

  const age = parseInt(ageElement.value);
  const gender = genderElement.value;
  const activity = activityElement.value;

  if (age <= 0) {
    resultElement.innerText = "Please enter valid age.";
    return;
  }

  const calories = calculatedCalories(age, gender, activity);

  resultElement.innerText =
    "Estimated daily calorie needed: " + calories + " kcal";
}

const estimateBtnElement = document.getElementById("estimateBtn");
estimateBtnElement.addEventListener("click", calculateCalorie);
