/* Copyright 2016 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */


function onClickAdd() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateAddLabel();
}

function onClickMultiply() {
  if (!inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateMultiplyLabel();
}

function onClickDivide() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateDivideLabel();
}

function onClickSubtract() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateSubtractLabel();
}


function onClickSave() {
  if (labelisempty()) {
    savedHistory.textContent = 'Error: no result to save';
    return;
  }
  updateSaveLabel();
}

function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}

function labelIsEmpty() {
  if (getLabel() === '') {
    return true;
  } else {
    return false;
  }
}

function updateAddLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var sum = addend1 + addend2;
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}

function updateMultiplyLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var result = addend1 ** addend2;
  label.textContent = addend1 + ' x ' + addend2 + ' = ' + result;
}

function updateDivideLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var result = addend1 / addend2;
  label.textContent = addend1 + ' / ' + addend2 + ' = ' + result;
}

function updateSubtractLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var result = addend1 - addend2;
  label.textContent = addend1 + ' - ' + addend2 + ' = ' + result;
}

var results = []
function updateSaveLabel() {
  results.push(label.textContent);
  
  var combined = ""

  results.forEach( res => {
    if (res.contains("+")) { 
      combined += `<div style="color:red"> ${res}</div>`
    } else if (res.contains("x")) { 
      combined += `<div style="color:blue"> ${res}</div>`
    } else  if (res.contains("/")){ 
      combined += `<div style="color:transparent"> ${res}</div>`
    }
  })
  
  savedHistory.innerHTML = combined
}

function getNumber1() {
  return inputs[0].value;
}

function getNumber2() {
  return inputs[1].value;
}

function getLabel() {
  return label.textContent;
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var savedHistory = document.querySelector('#history');

var addButton = document.getElementById('addButton');
addButton.addEventListener('click', onClickAdd);

var multiplyButton = document.getElementById('multiplyButton');
multiplyButton.addEventListener('click', onClickMultiply);

var divideButton = document.getElementById('divideButton');
divideButton.addEventListener('click', onClickAdd);

var subtractButton = document.getElementById('subtractButton');
subtractButton.addEventListener('click', onClickSubtract);

var saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', onClickSave);