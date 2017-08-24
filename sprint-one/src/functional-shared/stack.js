var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  // assign some properties to someInstance
  someInstance.count = 0;//Object.keys(someInstance).length;
  // assign some properties to someInstance that
  _.extend(someInstance, stackMethods); // {push: stackMethods.push, pop: stackMethods.pop, size:stackMethods.size})
  // return someInstance
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

stackMethods.pop = function() {
	var lastElement = this.storage[Object.keys(this.storage).length-1];
	delete this.storage[Object.keys(this.storage).length-1];
	this.count--;
	return lastElement;
} 

stackMethods.size = function() {
  return Object.keys(this.storage).length;
}

// testing what 'this' refers to in .push method
// var obj1 = Stack();
// // console.log(obj1);
// obj1.push()






