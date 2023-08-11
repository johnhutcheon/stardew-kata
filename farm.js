// Level 1
function cropWateringCalculator(forecast) {
  let count = 0;

  console.log(forecast);

  forecast.forEach((day) => {
    if (day.weather === "rain") {
      count++;
    }
  });

  return count;
}

// Level 2 and 3
function cropWateringCalculatorImproved(forecast, numOfCrops) {
  let rainyDays = 0;

  forecast.forEach((day) => {
    if (day.weather === "rain") {
      rainyDays++;
    }
  });

  if (rainyDays === 1) {
    return `There is ${rainyDays} day that you can skip watering your crops. You will need ${numOfCrops} sprinkles of water.`;
  } else
    return `There are ${rainyDays} days that you can skip watering your crops. You will need ${numOfCrops} sprinkles of water.`;
}

module.exports = { cropWateringCalculator, cropWateringCalculatorImproved };
