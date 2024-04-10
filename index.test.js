const getMissingNumber = require("./index");

describe("getMissingNumber", () => {
  test("must find missing number in array", () => {
    const cases = [
      {
        arr: [1, 2, 0, 5, 4],
        result: 3,
      },

      {
        arr: [1, 2, 3, 4, 6],
        result: 5,
      },
    ];

    cases.forEach((item) => {
      expect(getMissingNumber(item.arr)).toBe(item.result);
    });
  });
  test("must return undefined if no missing number or empty array", () => {
    const cases = [
      {
        arr: [1, 2, 3, 5, 4],
        result: undefined,
      },
      {
        arr: [],
        result: undefined,
      },
    ];
    cases.forEach((item) => {
      expect(getMissingNumber(item.arr)).toBe(item.result);
    });
  });
});
