var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  myArray.unshift(element);
  return myArray;
}

function addElementToBeginningOfArray(myArray, element) {
  var newArray = [element, ...myArray];
  return newArray;
}

function destructivelyAddElementToEndOfArray(myArray, element) {
  myArray.push(element);
  return myArray;
}

function addElementToEndOfArray(myArray, element) {
  var newArray = [...myArray, element];
  return newArray;
}

function accessElementInArray(myArray, index) {
  return myArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift();
  return myArray;
}

function removeElementFromBeginningOfArray(myArray) {
  var newArray = myArray.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(myArray) {
  var newArray = myArray.slice(myArray.length - 1);
  return newArray;
}