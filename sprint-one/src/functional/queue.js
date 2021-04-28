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
