module.exports = class multiplying_numbers_as_strings {

  generateDiagonals(matrice, ROW, COL) {
    let diagonals = [];
    // console.log(ROW, COL, matrice)

    // There will be ROW+COL-1 lines in the output
    for (let line = 1; line <= (ROW + COL - 1); line++) {
      /* Get column index of the first element in this line of output.
      The index is 0 for first ROW lines and line - ROW for remaining
      lines */
      let start_col = Math.max(0, line - ROW);

      /* Get count of elements in this line. The count of elements is
      equal to minimum of line number, COL-start_col and ROW */
      let count = Math.min(line, (COL - start_col), ROW);
      let diagonalsRow = [];

      /* Print elements of this line */
      for (let j = 0; j < count; j++) {
        let value = matrice[Math.min(ROW, line) - j - 1][start_col + j];

        diagonalsRow.push(value);
      }

      diagonals.push(diagonalsRow);

    }
    return diagonals;
  }
  generateLatticeMatrice(a, b) {
    let matrice = [];
    let ROW = a.length;
    let COL = b.length;
    for (let i = 0; i < ROW; i++) {
      matrice[i] = [];
      for (let j = 0; j < COL; j++) {
        let partResult = parseInt(a[i]) * parseInt(b[j]);
        let upperResult = parseInt(partResult / 10);
        let lowerResult = partResult - upperResult * 10;
        matrice[i][j] = { up: upperResult, down: lowerResult, debug: partResult };
      }
    }

    return matrice;
  }

  calculateSum(diagonal, previousDiagonal) {
    let downSum = 0, upSum = 0;

    if (diagonal) {
      downSum = diagonal.reduce((accumulator, value) => {
        return accumulator + value.down;
      }, 0);
    }

    if (previousDiagonal) {
      upSum = previousDiagonal.reduce((accumulator, value) => {
        return accumulator + value.up;
      }, 0);
    }

    return downSum + upSum;
  }

  multiply(a, b) {
    let matrice = this.generateLatticeMatrice(a, b);
    let diagonals = this.generateDiagonals(matrice, a.length, b.length);
    let mindValue = 0;
    let sumResponse = [];

    for (let i = diagonals.length - 1; i >= -1; i--) {
      let currentDiagonal = diagonals[i];
      let previousDiagonal = diagonals[i + 1];
      let rowSum = this.calculateSum(currentDiagonal, previousDiagonal) + mindValue;
      if (rowSum >= 10) {
        mindValue = parseInt(rowSum / 10);
        rowSum = rowSum - mindValue * 10;
      } else {
        mindValue = 0;
      }
      sumResponse.push(rowSum);
    }
    return sumResponse.reverse().join('').replace(/^0+/, '');
  }
}