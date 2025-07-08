const sampledata = [1,2,[3,4,[5,6,[7,8,9,[10]]]]]

// console.log(sampledata.flat(3))

// console.log(sampledata.toString().split(',').map(Number))

function flatten(array, level = 100) {
    const result = [];

    array.forEach(function(element) {
        if(Array.isArray(element) && level > 0){
            result.push(...flatten(element, level - 1))
        } else {
            result.push(element)
        }
    });

    return result
}

console.log(flatten(sampledata, 3))