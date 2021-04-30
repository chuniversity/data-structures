var Tree = function (value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true
  }
  var found = false
  var searchNext = function (children, target) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].value === target) {
        found = true
      } else {
        searchNext(children[i].children, target)
      }
    }
  }
  searchNext(this.children, target)
  return found

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
