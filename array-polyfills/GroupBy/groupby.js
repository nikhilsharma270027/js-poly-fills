Array.prototype.myGroupBy = function(key) {
    
    let result = {};
    for(const item of this) {
        let keyValue = item[key];
        if (!result.hasOwnProperty(keyValue)) {
            result[keyValue] = [];
        }
        result[keyValue].push(item);
    };
    console.log(result);
    return result;
}

// Example usage:
const sampleData = [
    { id: 1, category: 'A' },
    { id: 2, category: 'B' },
    { id: 3, category: 'A' },
    { id: 4, category: 'C' },
    { id: 5, category: 'B' }
];
const groupedData = sampleData.myGroupBy('category');
console.log(groupedData);

// function groupBy(arr, key) {
//     // Your implementation
//     let result = {};
//     console.log(key)

//     for (const item of arr) {
//         const keyvalue = item[key]
//         if (!result.hasOwnProperty(keyvalue)) {
//             result[keyvalue] = []
//         }
//         result[keyvalue].push(item)
//     }
//     console.log(result)
//     return result
// }

// groupBy([
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 }
// ], 'age');
// module.exports = groupBy;