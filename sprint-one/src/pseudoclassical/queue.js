var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count++] = value;
};

Queue.prototype.dequeue = function() {
  var firstElement = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return firstElement;
};

Queue.prototype.size = function() {
	return Object.keys(this.storage).length;
};
