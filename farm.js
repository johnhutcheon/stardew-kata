function cropWateringCalculator(forecast) {
  let count = 0;

  forecast.forEach((day) => {
    if (day.weather === "rain") {
      count++;
    }
  });

  return count;
}

function cropWateringCalculatorImproved(forecast, numOfCrops, cans) {
  let rainyDays = 0;

  forecast.forEach((day) => {
    if (day.weather === "rain") {
      rainyDays++;
    }
  });

  const sprinklesNeeded = numOfCrops * (28 - rainyDays);
  const cansNeeded = Math.ceil(sprinklesNeeded / 40);

  if (rainyDays === 1) {
    return `There is ${rainyDays} day that you can skip watering your crops. You will need ${sprinklesNeeded} sprinkles of water.`;
  } else
    return `There are ${rainyDays} days that you can skip watering your crops. You will need ${
      cans ? `${cansNeeded} cans` : `${sprinklesNeeded} sprinkles`
    } of water.`;
}

module.exports = { cropWateringCalculator, cropWateringCalculatorImproved };
