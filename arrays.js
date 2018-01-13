var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructiveylyAddElementToBeginningOfArray(myArray, element) {
  myArray.unshift(element);
  return myArray;
}

function addElementToBeginningOfArray(myArray, element) {
  var newArray = [element, ...myArray];
  return newArray;
}

function addElementToEndOfArray(myArray, element)