require("./slice.js");

describe("Slice method", () => {
  test("one positive parametr", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.mySlice(10);
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });

  test("two positive parametr", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.mySlice(1, 1);
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });

  test("two negative parameters", () => {
    const arr = ["a", "b", "c", "d", "e"];
    const result = arr.mySlice(-5, -2);
    const expectedResult = ["a", "b", "c"];
    expect(result).toEqual(expectedResult);
  });

  test("empty array", () => {
    const arr = [];
    const result = arr.mySlice(2);
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });
});
