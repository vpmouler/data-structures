
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};


};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
  this.nodes[node].value = node;
  this.nodes[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var truthy = false;
  if (this.nodes[node]){
    truthy = true;
  }
  return truthy;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var ourNode = this.nodes;
  //delete the edge that this node goes TO or comes FROM
  this.nodes[node].edges.forEach(function(el) {
  	console.log('element:', el);
  	console.log('this.nodes:', ourNode);
    var index = ourNode[el].edges.indexOf(node);
    ourNode[el].edges[index] = undefined;
  });
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //look through array of edges
  return this.nodes[fromNode].edges.indexOf(toNode) > -1;
 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //push into fromNodes edges property the toNode
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //access fromnode and tonode edge property
  //we need to add a var to store index of specific node val at that edge prop
  var fromNodeIndex = this.nodes[fromNode].edges.indexOf(toNode);
  var toNodeIndex = this.nodes[toNode].edges.indexOf(fromNode);
  console.log('fromindex:',fromNodeIndex);
  console.log('toindex:',toNodeIndex);
  //set respective edge arrays at that index to undefined
  this.nodes[fromNode].edges[fromNodeIndex] = undefined;
  this.nodes[toNode].edges[toNodeIndex] = undefined;

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callback) {
  // loop through each nodes obj
  for (var key in this.nodes) {
    callback(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var connectToFive = function(item) {
  graph.addEdge(item, 5);
};

var graph = new Graph();
graph.addNode(5);
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);
graph.forEachNode(connectToFive);
console.log(graph.hasEdge(2, 5));
console.log(graph.hasEdge(1, 5));
console.log(graph.hasEdge(3, 5));
console.log(graph.hasEdge(5, 5));

