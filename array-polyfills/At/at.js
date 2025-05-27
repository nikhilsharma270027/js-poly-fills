Array.prototype.myAt = function (index) {
  if (index >= 0) {
    return this[index];
  } else {
    return this[this.length + index];
  }
};
// Usage example
const arr = [1, 2, 3, 4, 5];
console.log(arr.myAt(2)); // Output: 3
console.log(arr.myAt(-1)); // Output: 5