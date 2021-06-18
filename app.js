"use strict";

const inputBillAmount = document.querySelector(".bill");
const inputTipRate = document.querySelector(".tipRate");
const resultTip = document.querySelector(".tip");
const resultTotal = document.querySelector(".total");
const billButton = document.querySelector(".billButton");
const rateButton = document.querySelector(".rateButton");

let bill;
let tip;

let globalBillAmount;
let globalTipRate;

inputBillAmount.addEventListener("click", updateBillAmountValue);
inputTipRate.addEventListener("click", updateTipRateValue);

function updateBillAmountValue() {
  let promptNum = prompt("What is the bill amount?");
  inputBillAmount.value = promptNum;
  bill = Number(promptNum);
  updateTotalTip(bill);
}

function updateTipRateValue() {
  let promptNum = prompt("What is the tip rate?");
  inputTipRate.value = promptNum;
  tip = Number(promptNum);
  updateTotalBill(tip);
}

function updateTotalTip(amountTarget) {
  console.log(amountTarget);
  globalBillAmount = amountTarget;
}

function updateTotalBill(tipTarget) {
  console.log(tipTarget);
  globalTipRate = tipTarget;
  resultTip.textContent = Math.round(globalBillAmount * (globalTipRate / 100));
  resultTotal.textContent = globalBillAmount + resultTip.textContent;
}

billButton.addEventListener("click", () => {
  inputBillAmount.value = 0;
});

rateButton.addEventListener("click", () => {
  inputTipRate.value = 0;
});
