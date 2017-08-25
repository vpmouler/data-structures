var stackMethods = {};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // var someInstance = Object.create(Stack.prototype);
  
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};

  return someInstance;
};



stackMethods.push = function(value) {
  this.storage[this.count++] = value;
};

stackMethods.pop = function() {
  var lastElement = this.storage[Object.keys(this.storage)[this.count - 1]];
  delete this.storage[Object.keys(this.storage)[this.count - 1]];
  this.count--;
  return lastElement;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

// console.log(stackMethods)
// var newInst = Stack();
// // console.log(newInst);
// newInst.push()

// var myinst = Stack();
// myinst.push();


// console.log(myinst instanceof Stack)
// console.log(myinst)
// console.log(Object.getPrototypeOf(myinst))