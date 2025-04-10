"use strict";

// Selecting units
const firstUnity = document.querySelector(".unity-1");
const secondUnity = document.querySelector(".unity-2");
let firstUnityValue = firstUnity.value;
let secondUnityValue = secondUnity.value;

// Function to disable the same option in the second select
const updateSecondUnityOptions = () => {
  const selectedValue = firstUnity.value;

  // Enable all options in the second select
  Array.from(secondUnity.options).forEach((option) => {
    option.disabled = false;
  });

  // Disable the option in the second select that matches the first select's value
  const optionToDisable = Array.from(secondUnity.options).find(
    (option) => option.value === selectedValue
  );
  if (optionToDisable) {
    optionToDisable.disabled = true;
  }
};

// Add event listener to the first select
firstUnity.addEventListener("change", updateSecondUnityOptions);

// Initialize the second select options on page load
updateSecondUnityOptions();

// Selecting measures insired
const measureOne = document.querySelector(".measure-1");
const measureTwo = document.querySelector(".measure-2");

const btnConvert = document.querySelector(".btn-convert");
const btnClear = document.querySelector(".btn-clear");

// FUNCTIONS

const metersToKilometers = (value) => value / 1000;

const metersToCentimeters = (value) => value * 100;

const centimetersToMeters = (value) => value / 100;

const centimetersToKilometers = (value) => value / 100000;

const kilometersToMeters = (value) => value * 1000;

const kilometersToCentimeters = (value) => value * 100000;

firstUnity.addEventListener("change", () => {
  // Get the option selected
  firstUnityValue = firstUnity.value;
  // Get the selected value
  console.log("Selected unity(1):", firstUnityValue, typeof firstUnityValue);
});

secondUnity.addEventListener("change", () => {
  secondUnityValue = secondUnity.value;
  // Get the select value
  console.log("Selected unity(2):", secondUnityValue);
});

btnConvert.addEventListener("click", () => {
  console.log(firstUnityValue, secondUnityValue);
  console.log(measureOne.value, measureTwo.value);
  const value1 = Number(measureOne.value);
  const value2 = Number(measureTwo.value);
  if (
    firstUnityValue === "m" && secondUnityValue === "km"
      ? (measureTwo.value = metersToKilometers(value1))
      : (measureTwo.value = metersToCentimeters(value1))
  ) {
    console.log(measureTwo.value, typeof measureTwo.value);
  } else if (
    firstUnityValue === "cm" && secondUnityValue === "m"
      ? (measureTwo.value = centimetersToMeters(value1))
      : (measureTwo.value = centimetersToKilometers(value1))
  ) {
    console.log(measureTwo.value, typeof measureTwo.value);
  } else if (
    firstUnityValue === "km" && secondUnityValue === "m"
      ? (measureTwo.value = kilometersToMeters(value1))
      : (measureTwo.value = kilometersToCentimeters(value1))
  ) {
    console.log(measureTwo.value, typeof measureTwo.value);
  }
});

btnClear.addEventListener("click", () => {
  console.log("btn clear");
  measureOne.value = "";
  measureTwo.value = "";
});
