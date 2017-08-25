var extend = function(to, from) {
  for (var k in from) {
    to[k] = from[k];
  }

};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  extend(newTree, treeMethods);

  newTree.children = []; // should be an array that has an obj that has a property value

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // push obj that has value
  var obj = {};
  extend(obj, treeMethods);
  obj.value = value;
  obj.children = [];
  this.children.push(obj);
};

treeMethods.contains = function(target) {
  
  if (this.value === target){
  	return true;
  }
  
  for (var i = 0; i < this.children.length; i++){
  	if (this.children[i].contains(target)){
  		return true;
  	} 
  }
  return false;
};


var myTree = Tree(10);
myTree.addChild(5);

myTree.addChild(6);
// console.log(myTree)
myTree.children[0].addChild(7);
// console.log(myTree)
myTree.children[1].addChild(8);

console.log(myTree);
console.log('-----------');
console.log('0', myTree.children[0]);
console.log('1', myTree.children[1]);
//console.log(myTree.children[0].children[0].value);
console.log(myTree.contains(8))


/*
 * Complexity: What is the time complexity of the above functions?


 */
