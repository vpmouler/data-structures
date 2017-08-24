var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  // this.storage[Object.keys(this.storage).length - 1]
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function(){
  var firstEl = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  // this.count--;
  return firstEl;
};

queueMethods.size = function(){
  return Object.keys(this.storage).length;
  
};

queue.enqueue('a');
queue.enqueue('b');
queue.dequeue();
queue.enqueue('c');
expect(queue.dequeue()).to.equal('b');

// var myInst = Queue();
// myInst.enqueue();