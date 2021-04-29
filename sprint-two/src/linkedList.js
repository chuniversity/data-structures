var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = Node(value)
    if (!list.head) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function () {
    var oldHead = list.head;
    if (!list.head) {
      return null;
    } else {
      if (list.head === list.tail) {
        list.tail = null;
        list.head = null;
      } else {
        list.head = list.head.next;
      }
      return oldHead.value;
    }

  };

  list.contains = function (target) {
    //currentnode = list.head
    // while the current node exists (while loop)
    //check to see if current node is equal to the target
    //if it is, return current node
    //otherwise currentnode is equal to currentnode.next

    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return currentNode.value === target;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;

  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 *
 */