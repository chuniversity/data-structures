var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  _.extend(someInstance, queueMethods);


  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.back++;
  this.storage[this.back] = value;
};

queueMethods.dequeue = function () {
  if (this.size() > 0) {
    this.front++;
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    return temp;
  }
};


queueMethods.size = function () {
  return this.back - this.front;
};

