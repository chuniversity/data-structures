var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.length++;
  this[this.length] = value;
};

stackMethods.pop = function () {
  var result = this[this.length];

  delete this[this.length];
  if (this.length > 0) {
    this.length--;
  }
  return result;

};

stackMethods.size = function () {
  return this.length;
};