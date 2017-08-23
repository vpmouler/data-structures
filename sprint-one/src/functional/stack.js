var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; // obj[key]=value
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    // take out last element
    var lastElement = storage[Object.keys(storage).length-1];
    delete storage[Object.keys(storage).length-1];
    count--;
    return lastElement;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

var arr = [1,2,67];
console.log(arr.pop());