Array.prototype.myIncludes = function(element, fromIndex = 0) {
    // Check if the array is empty
    if (this.length === 0) {
        return false;
    }

    // Handle negative fromIndex
    if (fromIndex < 0) {
        fromIndex = Math.max(this.length + fromIndex, 0);
    }

    // Iterate through the array starting from fromIndex
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === element) {
            return true;
        }
    }

    return false;
}