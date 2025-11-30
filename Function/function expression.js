const getDay = function () {
  const days = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];
  const today = new Date().getDay();
  return days[today];
};

console.log(getDay());

//
//

const convertTemp = function (temp, convertTo) {
  // choose default unit: if convertTo is null/undefined use 'F'
  let toUnit = convertTo ?? "F";

  // ensure temp is a Number; if conversion fails use 0
  let tempToConvert = Number(temp) ?? 0;

  if (toUnit === "F") {
    // convert from Celsius to Fahrenheit: (C × 9/5) + 32
    let fahrenheit = (tempToConvert * 9) / 5 + 32;
    return `${fahrenheit}\u00B0F`;
  } else {
    // convert from Fahrenheit to Celsius: (F - 32) × 5/9
    let celsius = ((tempToConvert - 32) * 5) / 9;
    return `${celsius}\u00B0C`;
  }
};

let today = 100;
console.log(convertTemp(today, "F"));
