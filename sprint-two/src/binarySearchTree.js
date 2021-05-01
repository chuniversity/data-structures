var BinarySearchTree = function (value) {
  var tree = Object.create(BinarySearchTree.prototype);
  //create initial value
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


BinarySearchTree.prototype.insert = function (input) {
  if (input < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(input);
      return true;
    } else {
      this.left.insert(input);
    }
  } else if (input > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(input);
      return true;
    } else {
      this.right.insert(input);
    }
  }


  //if value < this.value
  //if this.left === null
  //this.left = new BinarySearchTree(value)
  //else
  //this.left.insert(value);

  //if value > this.value
};

BinarySearchTree.prototype.contains = function (input) {
  if (this.value === input) {
    return true
  } else if (this.right && input > this.value) {
    return this.right.contains(input)
  } else if (this.left && input < this.value) {
    return this.left.contains(input)
  } else {
    return false
  }
}


BinarySearchTree.prototype.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}
