function cropWateringCalculator(forecast) {
  let count = 0;

  forecast.forEach((day) => {
    if (day.weather === "rain") {
      count++;
    }
  });

  return count;
}

function cropWateringCalculatorImproved(forecast, numOfCrops) {
  let rainyDays = 0;

  forecast.forEach((day) => {
    if (day.weather === "rain") {
      rainyDays++;
    }
  });

  // watering can holds 40
  // if crops are over 40, work out how many extra days there are
  // work out how many rainy days there are
  // if rainy days are less than extra crops, throw an error message

  if (numOfCrops > 40) {
    const extraCrops = numOfCrops - 40;
    rainyDays < extraCrops
      ? (msg = `WARNING: You don't have enough water for all your crops.`)
      : (msg = `There are ${rainyDays} days that you can skip watering your crops. You will need ${
          numOfCrops - rainyDays
        } sprinkles of water.`);
    return msg;
  }

  //crops less than 40, this will deal with it...

  if (rainyDays === 1) {
    return `There is ${rainyDays} day that you can skip watering your crops. You will need ${
      numOfCrops - rainyDays
    } sprinkles of water.`;
  } else
    return `There are ${rainyDays} days that you can skip watering your crops. You will need ${
      numOfCrops - rainyDays
    } sprinkles of water.`;
}

module.exports = { cropWateringCalculator, cropWateringCalculatorImproved };
