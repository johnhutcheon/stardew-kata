const {
  cropWateringCalculator,
  cropWateringCalculatorImproved,
} = require("./farm");

const { mixedForecast, noRainForecast } = require("./resources/weather");

describe("cropWateringCalculator", () => {
  test("function takes an array of weather forecast objects and returns a number ", () => {
    const result = cropWateringCalculator([]);
    expect(typeof result).toEqual("number");
  });
  test("function returns correct number of 0 when no rainy days are forecast", () => {
    const result = cropWateringCalculator(noRainForecast);
    expect(result).toEqual(0);
  });
  test("function returns correct number when one rainy day is forecast", () => {
    const result = cropWateringCalculator([{ day: 1, weather: "rain" }]);
    expect(result).toEqual(1);
  });
  test("function returns correct number when passed multiple rainy and sunny days", () => {
    const result = cropWateringCalculator(mixedForecast);
    expect(result).toEqual(7);
  });
});

describe("cropWateringCalculatorImproved", () => {
  test("function returns a string", () => {
    const result = cropWateringCalculatorImproved(
      [{ day: 1, weather: "sunny" }],
      2
    );
    expect(typeof result).toEqual("string");
  });

  test("function takes a forecast for one sunny day and returns the correct string", () => {
    const result = cropWateringCalculatorImproved(
      [{ day: 1, weather: "sunny" }],
      2
    );
    expect(result).toEqual(
      "There are 0 days that you can skip watering your crops. You will need 2 sprinkles of water."
    );
  });

  test("function takes a forecast for one rainy day and returns the correct string", () => {
    const result = cropWateringCalculatorImproved(
      [{ day: 1, weather: "rain" }],
      2
    );
    expect(result).toEqual(
      "There is 1 day that you can skip watering your crops. You will need 1 sprinkles of water."
    );
  });
  test("function takes a mixed forecast and returns the correct string", () => {
    const result = cropWateringCalculatorImproved(mixedForecast, 32);
    expect(result).toEqual(
      "There are 7 days that you can skip watering your crops. You will need 25 sprinkles of water."
    );
  });
  test("function returns a warning if crops are over 40 and there are not enough rainy days", () => {
    const result = cropWateringCalculatorImproved(mixedForecast, 70);
    expect(result).toEqual(
      `WARNING: You don't have enough water for all your crops.`
    );
  });
});
