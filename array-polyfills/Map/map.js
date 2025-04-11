Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const value = callback(this[i], i, this);
    result.push(value);
  }

  return result;
};
