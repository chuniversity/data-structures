

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  // if storage at index is empty
  // insert the the key and value as an array inside an array
  //else
  //iterate over the storage index
  //if the index exists
  //return the old value and insert the new one

  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(index, v);
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {
    var inserted = false;
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      }
    }
    if (inserted === false) {
      this._storage[index].push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //return this._storage.get(index);
  for (var i = 0; i < this._storage[index].length; i++) {
    var currentPair = this._storage[index][i];
    if (currentPair[0] === k) {
      return currentPair[1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i);
    }
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


