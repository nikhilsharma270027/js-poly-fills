// Description
// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.

Array.prototype.myFindIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)) {
        return i
    }
  }
  return -1;
}