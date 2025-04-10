// Description :
// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.
// The unshift() method return the new length of the array
Array.prototype.myUnshift = function () {
  //
  if (arguments.length > 0) {
    for (let i = this.length - 1; i >= 0; i--) {
      // Shift theelements to the right
      this[i + arguments.length] = this[i];
    }
    // add new elements to thr beginiing og the array
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }

  return this.length;
};
