window.onload = () => {
  singleRange();
  doubleRangeFirst();
  doubleRangeSecond();
};

const $singleInput = document.getElementById("single-input");
const $singleInputValue = document.getElementById("single-value");

const $doubleInput1 = document.getElementById("doubleInput-1");
const $doubleInput2 = document.getElementById("doubleInput-2");
const $doubleValue1 = document.getElementById("double-value-1");
const $doubleValue2 = document.getElementById("double-value-2");
const $doubleValueCont = document.querySelector(".doubleRange__value");

const $sliderTrack = document.querySelector(".slider-track");
const $doubleInputMaxVal = document.getElementById("doubleInput-2").max;
let minGap = 0;

function singleRange() {
  let value = $singleInput.value;
  $singleInputValue.textContent = value;
  $singleInputValue.style.left = value / 2 + "%";
  $singleInputValue.classList.add("show");
}

function doubleRangeFirst() {
  let input1 = $doubleInput1.value;
  let input2 = $doubleInput2.value;
  if (parseInt(input2) - parseInt(input1) <= minGap) {
    input2 = parseInt(input1);
  }
  $doubleValue1.textContent = input1;
  $doubleValueCont.classList.add("show");
  $doubleValueCont.style.left = input1 / 3 + "px";
  fillColor();
}

function doubleRangeSecond() {
  let input1 = $doubleInput1.value;
  let input2 = $doubleInput2.value;
  if (parseInt(input2) - parseInt(input1) <= minGap) {
    input2 = parseInt(input1);
  }

  $doubleValue2.textContent = input2;
  $doubleValueCont.classList.add("show");
  $doubleValueCont.style.left = input2 / 3 + "px";
  fillColor();
}

function onBlur() {
  $singleInputValue.classList.remove("show");
  $doubleValueCont.classList.remove("show");
}

function fillColor() {
  let input1 = $doubleInput1.value;
  let input2 = $doubleInput2.value;
  parcent1 = (input1 / $doubleInputMaxVal) * 100;
  parcent2 = (input2 / $doubleInputMaxVal) * 100;

  $sliderTrack.style.background = `
    linear-gradient(to right , #dadae5 ${parcent1}%,
        #3416b6 ${parcent1}%, #3416b6 ${parcent2}%, #dadae5 ${parcent2}%)
    `;
}
