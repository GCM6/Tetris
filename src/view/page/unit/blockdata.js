export const blockType ={
    I: [[1, 1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1]],
    Z: [[1, 1, 0], [0, 1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    O: [[1, 1], [1, 1]],
    T: [[0, 1, 0], [1, 1, 1]]
  }

 export const blankLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
 export const blockmatrix = (() => {
  let matrix = [];
  for (var i = 0; i < 20; i++) {
    matrix.unshift(blankLine);
  }
  return matrix
 })
// 循转的类型，L只有四种类型：
/**
 * `        ` ` ` `    ` `    ___|
 * `        `            `
 * ` `                   `
 */
 export const rotate = {
   L:[[0, 0]],
   J: [[0, 0]],
   I: [[-1, 1], [1, -1]],
   Z: [[0, 0]],
   O: [[0, 0]],
   T: [[0, 0], [1, 0],[-1, 1], [0, 1]],
   S: [[0, 0]]
 }
  



