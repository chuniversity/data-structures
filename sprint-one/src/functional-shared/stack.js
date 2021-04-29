// var Stack = function () {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = {};
//   someInstance.length = 0;
//   someInstance.push = stackMethods.push;
//   someInstance.pop = stackMethods.pop;
//   someInstance.size = stackMethods.size;
//   return someInstance;
// };

// var stackMethods = {}

// stackMethods.push = function (value) {
//   this.length++;
//   this[this.length] = value;
// };

// stackMethods.pop = function () {
//   var result = this[this.length];

//   delete this[this.length];
//   if (this.length > 0) {
//     this.length--;
//   }
//   return result;

// };

// stackMethods.size = function () {
//   return this.length
// };



var Queue = function () {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var id = 0;
  // Implement the methods below
  someInstance.enqueue = function (value) {
    length++;
    id++;
    storage[id] = value;
  };
  someInstance.dequeue = function () {
    var keys = Object.keys(storage);
    var smallest = id;
    keys.forEach(function (item) {
      if (item < smallest) {
        smallest = item;
      }
    });
    var result = storage[smallest];
    delete storage[smallest];
    if (length > 0) {
      length--;
    }
    return result;
  };
  someInstance.size = function () {
    return length;
  };
  return someInstance;
};


