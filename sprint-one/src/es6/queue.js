class Queue {

  constructor() {
    this.front = 0;
    this.back = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.back++;
    this.storage[this.back] = value;
  }

  dequeue() {
    if (this.size() > 0) {
      this.front++;
      var temp = this.storage[this.front];
      delete this.storage[this.front];
      return temp;
    }
  }

  size() {
    return this.back - this.front;
  }

}
