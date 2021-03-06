// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
    return Object.keys(object).length;
    // returns the size of that object
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  return (Math.min(...Object.values(object)));
}

  // returns the size of that object
/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  return (Math.max(...Object.values(object)));
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  return (Object.assign({}, object));
}
/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  return object[key];
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  if( object[key] !== undefined) {
    return true;
  }
  else {
    return false;
  }
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  if (Object.keys(object).length === 0) {
    return 0
  }
  const objectVal = Object.values(object)
  console.log(objectVal);
  let removedNonNumbers = [];
  for (i = 0; i < objectVal.length; i++) {
    //console.log(objectVal[i]);
    //console.log("------------------------");
    if (Number.isInteger(objectVal[i])) {
      removedNonNumbers.push(objectVal[i])
    }
  //console.log(removedNonNumbers);
  }
  if (removedNonNumbers.length === 0) {
    return 0;
  }
  const toBeSummed = removedNonNumbers.reduce((a, b) => a + b)
  return toBeSummed;
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  //get keys into an array
  const newValues = Object.keys(object);
  //get values into an array
  const newKeys = Object.values(object);
  //create new obj with values as keys
  let newObj = {};
  //add keys as values to new object
  for(i = 0; i < newValues.length; i++) {
    newObj[newKeys[i]] = newValues[i]
  }
  return newObj;
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  return Object.assign({}, ...arr);
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  const winners = Object.values(obj).filter(matcherFunc)
  //console.log(winners);
  if(winners.length > 0) {
    return winners[0];
  }
  else {
    return null
  }
  }

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {
  const allMatch = Object.values(obj).every(func);
  return allMatch;
}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {
  const someMatch = Object.values(obj).some(func);
  return someMatch;
}


function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
