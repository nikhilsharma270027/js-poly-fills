require("./push.js");

describe("Push elements to the end of the array", () => {
  test("Push test case", () => {
    const array = [1, 2, 3, 4, 5];
    const result = array.myPush(6, 7, 8);
    const expectedResult = 8;
    const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(result).toEqual(expectedResult);
    expect(array).toEqual(expectedArray);
  });
});
