Array.prototype.myForEach = function (cb) {
    // Check if the array is an instance of Array
    if (!Array.isArray(this)) {
        throw new TypeError('Array is not an instance of Array');
    }
    // Check if the array is empty
    if (this.length === 0) {
        return undefined;
    }
    // Loop through the array and call the callback function for each element           
    for (let i = 0; i < this.length; i++) {
        // Check if the element is not undefined
        if (this[i] !== undefined) {
            cb(this[i], i, this);
        }
    }
    // Return undefined to indicate that the function has completed
    return undefined;
}

// Example usage:
// const arr = [1, 2, 3, 4, 5];
// arr.myForeach((element, index) => {
//     console.log(`Element at index ${index}: ${element}`);
// });
// Output:
// Element at index 0: 1