
/*
 nodes : {
  4 : 4,
  5 : 5
  edges : {
    4 : 5,
    5 : 4
  }
}
*/


// Instantiate a new graph
var Graph = function () {
  this.nodes = {};
  this.nodes.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[node] = node;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.nodes[node] === node) {
    return true;
  } else return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this.nodes[node];
  for (var key in this.nodes.edges) {
    delete this.nodes.edges[node]
  }
  for (var key in this.nodes.edges) {
    if (this.nodes.edges[key] === node) {
      this.removeEdge(null, key);
    }
  }
}

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.nodes.edges[fromNode] === toNode) {
    return true;
  } else if (this.nodes.edges[toNode] === fromNode) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.nodes.edges[fromNode] = toNode;
  this.nodes.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  delete this.nodes.edges[fromNode];
  delete this.nodes.edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {

  for (var key in this.nodes) {
    if (typeof this.nodes[key] !== 'object') {
      cb(this.nodes[key]);
    }
  }
};