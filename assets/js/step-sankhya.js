function calculateSteps() {
  const currentWeightElement = document.getElementById("currentWeight");
  const goalWeightElement = document.getElementById("goalWeight");
  const monthElement = document.getElementById("timePeriod");
  const resultElement = document.getElementById("stepResult");

  const currentWeight = parseFloat(currentWeightElement.value);
  const goalWeight = parseFloat(goalWeightElement.value);
  const months = parseFloat(monthElement.value);

  if (
    isNaN(currentWeight) ||
    isNaN(goalWeight) ||
    isNaN(months) ||
    goalWeight >= currentWeight ||
    months <= 0
  ) {
    resultElement.innerText =
      "Please enter a valid goal weight and time period.";
    return;
  }

  const kgToLose = currentWeight - goalWeight;
  const totalCaloriesToBurn = kgToLose * 7700;
  const totalDays = months * 30;
  const dailyCaloriesToBurn = totalCaloriesToBurn / totalDays;
  const stepsPerDay = Math.round(dailyCaloriesToBurn / 0.04);

  resultElement.innerText =
    "To reach your goal, walk at least " +
    stepsPerDay +
    " steps per day for " +
    months +
    " months.";
}

const calculateStepsBtnElement = document.getElementById("calculateStepsBtn");
calculateStepsBtnElement.addEventListener("click", calculateSteps);
