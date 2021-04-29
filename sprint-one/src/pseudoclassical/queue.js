var Queue = function () {

  this.front = 0;
  this.back = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function (value) {
  this.back++;
  this.storage[this.back] = value;
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    this.front++;
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    return temp;
  }
};

Queue.prototype.size = function () {
  return this.back - this.front;
};
