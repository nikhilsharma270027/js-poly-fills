require("./map.js");

describe("Array.prototype.map", () => {
  test("map test case 1", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myMap((num) => num * 2);
    const expectedResult = [2, 4, 6, 8, 10];
    expect(result).toEqual(expectedResult);
  });
});
