require("./ForEach.js");

describe("Array.prototype.forEach", () => {
  test("test case 1", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = {};
    arr.myForEach((element, index) => {
      result[index] = element;
    });
    const expectedResult = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
    expect(result).toEqual(expectedResult);
  });

  test("test case 2", () => {
    const arr = ["a", "b", "c"];
    const result = {};
    arr.myForEach((element, index) => {
      result[index] = element;
    });
    const expectedResult = { 0: "a", 1: "b", 2: "c" };
    expect(result).toEqual(expectedResult);
  });
});
