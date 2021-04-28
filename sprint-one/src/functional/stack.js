var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    length++;
    storage[length] = value;
  };

  someInstance.pop = function () {
    var result = storage[length];

    delete storage[length];
    if (length > 0) {
      length--;
    }
    return result;
    console.log(result.length);
  };

  someInstance.size = function () {
    return length;
  };

  return someInstance;
};
