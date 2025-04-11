// Description
// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

Array.prototype.mySlice = function (start = 0, end = this.length) {
  // check if start is negative/ less than 0
  if (start < 0) {
    start = this.length + start; //
  }

  if (end < 0) {
    end = this.length + end;
  }

  let arr = []; // create a new array to store the sliced elements
  for (let i = start; i < end; i++) {
    arr.push(this[i]); // push the elements into the new array
  }

  return arr;
};
