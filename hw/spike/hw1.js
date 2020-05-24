// 1. 矩阵乘法
const assert = require('assert').strict

function Product(M1, M2) {
  if (M1[0].length !== M2.length) {
    throw new Error("Invalid parameters!")
  }

  let result = [];

  for (let i = 0; i < M1.length; i++) {
    let rowArr = [];
    
    for (let col = 0; col < M2[0].length; col++) {
      let sum = 0;

      for (let j = 0; j < M2.length; j++) {
          sum += (M1[i][j] * M2[j][col]);
      }
      rowArr.push(sum);
    }
    result.push(rowArr);
  }

  return result;
}

function Test_Product() {
  let M1 = [
    [1, 0, 2],
    [-1, 3, 1]
  ];

  let M2 = [
    [3, 1],
    [2, 1],
    [1, 0]
  ];

  assert.strictEqual(
    Product(M1, M2).toString(),
    [
      [5, 1],
      [4, 2]
    ].toString()
  );

  let M3 = [
    [1, 2, 3],
    [4, 5, 6]
  ];

  let M4 = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];

  assert.strictEqual(
    Product(M3, M4).toString(),
    [
      [58, 64],
      [139, 154]
    ].toString()
  );

  let M5 = [
    [2, 1],
    [4, 3]
  ];

  let M6 = [
    [1, 2],
    [1, 0]
  ];

  assert.strictEqual(
    Product(M5, M6).toString(),
    [
      [3, 4],
      [7, 8]
    ].toString()
  );
}

Test_Product();