require("./includes.js");

describe("Array.prototype.includes", () => {
  test("Element found ", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myIncludes(3);
    const expectedresult = true;
    expect(result).toBe(expectedresult);
  });

  test("Element found after an index ", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myIncludes(3, 2);
    const expectedresult = true;
    expect(result).toBe(expectedresult);
  });

  test("Element not found ", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myIncludes(6);
    const expectedresult = false;
    expect(result).toBe(expectedresult);
  });

  test("Element found with negative index ", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myIncludes(4, -2);
    const expectedresult = true;
    expect(result).toBe(expectedresult);
  });

  test("Elemnt not found after an index", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.myIncludes(3, 4);
    const expectedresult = false;
    expect(result).toBe(expectedresult);
  });
});
