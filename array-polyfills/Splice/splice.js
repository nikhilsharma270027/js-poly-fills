// Description
// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.

Array.prototype.mySplice = function(){
    let returnResult = [];
    let start, deleteCount;
    let items = [];

    if(arguments.length === 0) {
        return returnResult;
    }

    start = arguments[0];
    if(start >= this.length) {
        return returnResult;
    }

    // delete Count
    if(arguments.length === 1) {
        // if deleteCount is not provided, it will be the length of the array - start
        deleteCount  = this.length - start
    }
    if (arguments.length >= 2) {
        // if deleteCount is provided, it will be the value of deleteCount
        // and it will be the length of the array - start
        deleteCount = arguments[1];
    // 
        if (deleteCount > this.length - start) {
          deleteCount = this.length - start;
        }
      }

    // items - pushing the items in the array which shd be added int the place of deleted items
    if(arguments.length > 2 ) {
        for(let i = 2; i < arguments.length; i++) {
            items.push(arguments[i]);
        }
    }


    // delete elements if delete count > 0
  if (deleteCount > 0) {
    for (let i = 0; i < deleteCount; i++) {
      returnResult.push(this[start + i]);
    }

    for (let i = start, j = 0; i <= this.length - deleteCount; i++, j++) {
      this[start + j] = this[start + j + deleteCount];
    }

    this.length = this.length - deleteCount;
  }

  // add elements if items are provided
  if (items.length > 0) {
    for (let i = this.length - 1; i >= start; i--) {
      this[i + items.length] = this[i];
    }

    for (let i = 0; i < items.length; i++) {
      this[start + i] = items[i];
    }
  }
  return returnResult;
};