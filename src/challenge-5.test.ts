import { partitionCollatzSeries } from "./challenge-5";

describe("partitionCollatzSeries tests", () => {
  test("1 to 10", () => {
    const testCases = [
      [1, [[1], []]],
      [2, [[1], [2]]],
      [3, [[3, 5, 1], [10, 16, 8, 4, 2]]],
      [4, [[1], [4, 2]]],
      [5, [[5, 1], [16, 8, 4, 2]]],
      [6, [[3, 5, 1], [6, 10, 16, 8, 4, 2]]],
      [7, [[7, 11, 17, 13, 5, 1], [22, 34, 52, 26, 40, 20, 10, 16, 8, 4, 2]]],
      [8, [[1], [8, 4, 2]]],
      [
        9,
        [
          [9, 7, 11, 17, 13, 5, 1],
          [28, 14, 22, 34, 52, 26, 40, 20, 10, 16, 8, 4, 2],
        ],
      ],
      [10, [[5, 1], [10, 16, 8, 4, 2]]],
    ] as [number, [number[], number[]]][];

    testCases.forEach(([input, expected]) => {
      expect(partitionCollatzSeries(input)).toEqual(expected);
    });
  });
});
