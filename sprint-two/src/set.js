var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function (item) {
  var isFound = false
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      isFound = true
    }
  }
  return isFound
};

setPrototype.remove = function (item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      delete this._storage[i]
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
