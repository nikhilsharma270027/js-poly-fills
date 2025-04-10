// Description
// The push() method adds new items to the end of an array.

// The push() method changes the length of the array.

// The push() method returns the new length.


Array.prototype.myPush = function () {
    for (let i = 0; i < arguments.length; i++) {
      // add new elements to the end of the array
      this[this.length] = arguments[i];
    }
    return this.length;
  };
  