import { Vec2 } from "./type";

function matrixByMatrix(a: number[][], b: number[][]): number[][] {
  const aSize: Vec2 = [a[0].length, a.length];
  const bSize: Vec2 = [b[0].length, b.length];

  if (aSize[0] !== bSize[1]) {
    throw new Error(`a length is ${aSize[0]}, b length is ${bSize[1]}`);
  }

  let result: number[][] = [...Array(aSize[1]).keys()].map((rowIndex) => {
    const row = a[rowIndex];

    return [...Array(bSize[0]).keys()].map((columnIndex) => {
      return row.reduce((_result, value, bRowIndex) => {
        if (isNaN(value) || isNaN(b[bRowIndex][columnIndex])) {
          throw new Error(`NaN value found`);
        }

        return _result + value * b[bRowIndex][columnIndex];
      }, 0);
    });
  });

  return result;
}

export { matrixByMatrix };
