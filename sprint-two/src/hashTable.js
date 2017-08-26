var LimitedArray = function(limit) {
  
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);

    storage[index] = value;
    console.log('storage within SET',storage);
    // check if storage[index] is undefined, if yes, make it an arry
    // if ( storage[index] === undefined ) {
    //   storage[index] = value;
    // } else {
    //   storage[index] = [];
    //   storage[index].push([index, value]);
    // }
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };
  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };
  return limitedArray;
};
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
  // return 0;
};
//---------------------------------------------------------------
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
// Key Value pairs are stored in tuples arrays 
//-- where index 0 is the key and index 1 is the value
HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if ( this._storage.get(index) === undefined ) {
    var bucketEmpty = [];
    bucketEmpty.push([key,val]);
    this._storage.set(index,bucketEmpty)
  } else {
    var bucket = this._storage.get(index);
    bucket.push([key,val]);
    this._storage.set(index,bucket)
  }

  // if ( this._storage.get(index))
  // bucket.push([key,val]);
  // console.log('BUCKET WITHIN INSERT', bucket);
  // this._storage.set(index,bucket)

};
HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var storageBucket = this._storage.get(index);
  // console.log('storageBUCKET',storageBucket);
  var keyValue;
  for ( var i = 0; i < this._storage.get(index).length; i++ ) { // why doesnt traverse if sing storageBuckey.length?
    if ( storageBucket[i][0] === key ) {
      keyValue = storageBucket[i][1]; //// THIS IS VERY HACKY!!!! SHOULD REPLACE INSTEAD OF LOOK FOR LAST VALUE, NEED TO CHANGE
    }
  }
  return keyValue;
};
HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var storageBucket = this._storage.get(index);
  for ( var i = 0; i < this._storage.get(index).length; i++ ) {
    if ( storageBucket[i][0] === key ) {
      delete storageBucket[i][0];
    }
    // this._storage.set(index, undefined);
  }
};


var hashTable = new HashTable();
var v1 = 'val1';
var v2 = 'val2';

// var oldHashFunction = window.getIndexBelowMaxForKey;
getIndexBelowMaxForKey = function() { return 0; };

hashTable.insert(v1, v1);
hashTable.insert(v2, v2);
console.log('entire', hashTable);
console.log('retrieve v1', hashTable.retrieve(v1)); // should be v1
console.log('retrieve v2', hashTable.retrieve(v2)); // should be v2
// console.log(LimitedArray());


// expect(hashTable.retrieve(v1)).to.equal(v1);
// expect(hashTable.retrieve(v2)).to.equal(v2);
// window.getIndexBelowMaxForKey = oldHashFunction;





/*
 * Complexity: What is the time complexity of the above functions?
 */
