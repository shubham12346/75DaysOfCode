// 2352. Equal Row and Column Pairs
// Medium
// 1.8K
// 100
// Companies
// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Example 1:
// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]
// Example 2:

// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

// function equalPairs(grid: number[][]): number {
//   let countRowCol = 0;
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid.length; col++) {
//       let rowCol = 0;

//       for (; rowCol < grid.length; rowCol++) {
//         if (grid[row][rowCol] !== grid[rowCol][col]) {
//           break;
//         }
//       }
//       if (rowCol === grid.length) countRowCol++;
//     }
//   }
//   return countRowCol;
// }

// optimized

function equalPairs(grid: number[][]): number {
  let count = 0;
  let rowMap = new Map<string, number>();

  for (let row of grid) {
    let key = row.join(",");
    rowMap.set(key, (rowMap.get(key) ?? 0) + 1);
  }

  for (let row = 0; row < grid.length; row++) {
    const column = [];

    for (let col = 0; col < grid.length; col++) {
      column.push(grid[col][row]);
    }

    if (rowMap.has(column.join(","))) {
      count += rowMap.get(column.join(","));
    }
  }
  return count;
}

let ans = equalPairs([
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
]);
console.log("Answer : ", ans);
