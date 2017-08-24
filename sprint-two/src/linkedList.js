var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if head is null we want to set tail equal
    // if head not null 
    var newNode = Node(value);
    if (list.head === null) {
      list.tail = newNode;
      list.head = list.tail;
      list.head.next = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
    // head is suppose to be added value
    // still call list.tail to be NOde(value);
    // list.head.next = newNode;
    // list.tail = Node(value);
    // need reference to head
    // it is currently replacing list.tail
  };

  list.removeHead = function() {
    delete list.head;
    list.head = list.tail; //head is the item it points to (tail)
    return list.head.value;
  };

  list.contains = function(target) {
    var truthy = false;
    var recurseFind = function(element) {
    // console.log(element);
    // base case
    if ( element.value === target ) {
      return true;
    } else if ( element.next === null ) { // we've reached tail
      // if next is null 
      return false;
    } else {
      return recurseFind(element.next);
    }

        // return false
      // else if .next is not null, 


    // recursive
      
    }
    return recurseFind(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// var list = LinkedList();

//console.log(list);

// list.addToTail(2);
// list.addToTail(10);
// list.addToTail(400);
// list.addToTail('a');
// console.log(list);

// console.log(list.contains('a'));


// console.log('NEXT', list.head.next);
// console.log('NEXT', list.head.next.next);

// LinkedList(Node(123))

// linkedList.addToTail(4);
// linkedList.addToTail(5);
// expect(linkedList.head.value).to.equal(4);
// linkedList.removeHead();
// expect(linkedList.head.value).to.equal(5);