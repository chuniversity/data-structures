var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  someInstance.id = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.length++;
  this.id++;
  this[id] = value;
};

queueMethods.dequeue = function () {
  var keys = Object.keys(this);
  var smallest = id;
  keys.forEach(function (item) {
    if (item < smallest) {
      smallest = item;
    }
  });
  var result = this[smallest];
  delete this[smallest];
  if (this.length > 0) {
    this.length--;
  }
  return result;
};


queueMethods.size = function () {
  return this.length;
};




