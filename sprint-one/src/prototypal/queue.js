var Queue = function () {
  var someInstance = Object.create(queueMethods);

  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};
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
