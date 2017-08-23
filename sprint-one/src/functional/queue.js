var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index++] = value;
  };

  someInstance.dequeue = function() {
    var arrayOfKeys = Object.keys(storage);
    var firstElement = storage[arrayOfKeys[0]]; // 
    delete storage[arrayOfKeys[0]];


    // index--;
    // if ( index < 0 ) {
    //   index = 0;
    // }
    // delete storage['0'];
    return firstElement;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// expect(queue.dequeue()).to.equal('b');



// function add(ar) {
//   var z = 10;
//   var x = 10;
//   while ( x > 0 ) {
//     console.log('x',x--);
//     console.log('z',--z);
//   }
// }

// add()