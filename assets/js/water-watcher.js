function calculateWaterIntake(weight, season) {
  let baseLitres = 0;

  if (weight < 50) {
    baseLitres = 1.5;
  } else if (weight <= 70) {
    baseLitres = 2.0;
  } else {
    baseLitres = 2.5;
  }

  if (season === "summer") {
    baseLitres += 0.5;
  } else if (season === "winter") {
    baseLitres -= 0.3;
  }

  return baseLitres.toFixed(1); // One decimal place
}

function calculateWater() {
  const weightElement = document.getElementById("weight");
  const seasonElement = document.getElementById("season");
  const resultElement = document.getElementById("result");

  const weight = parseFloat(weightElement.value);
  const season = seasonElement.value;

  if (isNaN(weight) || weight <= 0) {
    resultElement.innerText = "Please enter valid weight.";
    return;
  }

  const intake = calculateWaterIntake(weight, season);

  resultElement.innerText = "Drink at least " + intake + "L of water daily.";
}

const suggestBtnElement = document.getElementById("suggestBtn");
suggestBtnElement.addEventListener("click", calculateWater);
