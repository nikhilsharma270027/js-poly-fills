// Description
// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// Start and end position can be specified. If not, all elements will be filled.


Array.prototype.myFill = function (value, start = 0, end = this.length) {
    if(start < 0){
        start = this.length + start;
    }

    if(end < 0){
        end = this.length + end;
    }

    for(let i = start; i< end;i++){
        this[i] = value;
    }

    return this
}