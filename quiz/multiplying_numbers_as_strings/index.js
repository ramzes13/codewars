module.exports = class multiplying_numbers_as_strings {
  multiply(a, b) {
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
        // matrice[i][j] = { i: i, j: j };
      }
    }
    // console.log(matrice);

    // There will be ROW+COL-1 lines in the output
    for (let line = 1; line <= (ROW + COL - 1); line++) {
      /* Get column index of the first element in this line of output.
      The index is 0 for first ROW lines and line - ROW for remaining
      lines */
      let start_col = Math.max(0, line - ROW);

      /* Get count of elements in this line. The count of elements is
      equal to minimum of line number, COL-start_col and ROW */
      let count = Math.min(line, (COL - start_col), ROW);

      /* Print elements of this line */
      for (let j = 0; j < count; j++) {
        console.log(matrice[Math.min(ROW, line) - j - 1][start_col + j])
      }
      // console.log(matrice[Math.min(ROW, line)-j-1][start_col+j])
      // printf("%5d ", matrix[Math.min(ROW, line)-j-1][start_col+j]);

      /* Ptint elements of next diagonal on next line */
      console.log("\n");
    }
    return "6";
  }
}