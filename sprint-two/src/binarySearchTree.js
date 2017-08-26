var BinarySearchTree = function(value) {
  var binaryInstance = Object.create(BinarySearchTree.prototype);

  binaryInstance.value = value;
  binaryInstance.left = null;
  binaryInstance.right = null;

  return binaryInstance;
};

var binaryMethods = {};
//accepts a value and places in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  
  var newNode = new BinarySearchTree(value);
  //console.log('newnode val:', newNode.value);

  if (newNode.value > this.value){
    //if right is null return right as newNode
    if (this.right === null){
      this.right = newNode;
    }
    //if right is not null
    //look right branch, return right branch
    if (this.right !== null){
      //console.log('rightval:',this.right.value)

      return this.right.insert(value);
    }
    
  }
  if (newNode.value < this.value){
    //look left
    if (this.left === null){
      this.left = newNode;
    }
    //if left is not null
    //look left branch, return left branch
    if (this.left !== null){
      console.log('leftval:',this.left.value)

      return this.left.insert(value);
    }
  }

  if (this.left === null && this.right === null){
    
    return newNode;
  }
  

};

//accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function(value){
  //if value === this.value
    //return true
  //if this.right is not null
      //return this.right
  //if this.left is not null
    //return this.right

  if (value === this.value){
    return true;
  }
  if (this.right !== null){
    return this.right.contains(value);
  }
  if (this.left !== null) {
    return this.left.contains(value);
  }
  return false;
}


//accepts a callback and executes it on every value contained in the tree. (forEach)?
//recursive search, recursive insert
BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  
  if (this.left !== null) {
    return this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    return this.right.depthFirstLog(callback);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

/* 
var array = [];
var func = function(value) { array.push(value); };

var tree = BinarySearchTree(5);
//console.log(tree);
tree.insert(2);
tree.insert(3);
console.log('------------------');
console.log(tree);
tree.depthFirstLog(func);
console.log(array);
*/

