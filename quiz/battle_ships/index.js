const damagedOrSunk = (board, attacks) => {
    let boardsMeta = {};
    let boardsAttackMeta = {};
    let boartY = 1;
    for (let y = board.length - 1; y >= 0; y--) {
        for (let x = 0, xLen = board[y].length; x < xLen; x++) {
            let boardType = board[y][x];
            if (boardType > 0) {
                if (!boardsMeta[boardType]) {
                    boardsMeta[boardType] = {}
                    boardsAttackMeta[boardType] = 0;
                }
                let key = [x + 1, boartY].join(',');
                boardsMeta[boardType][key] = 0;
            }
        }
        boartY++;
    }

    attacks.forEach((attack) => {
        let key = attack.join(',');
        for(let i in boardsMeta) {
            if(boardsMeta[i][key] !== undefined) {
                boardsMeta[i][key] = 1;
                boardsAttackMeta[i] +=1;
            }
        }
    });

    let result = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0,
    }
    for(let i in boardsMeta) {
        if(boardsAttackMeta[i] === 0) {
            result.notTouched +=1;
            result.points -=1;
        } else if(boardsAttackMeta[i] === Object.keys(boardsMeta[i]).length) {
            result.sunk +=1;
            result.points +=1;
        } else {
            result.damaged +=1;
            result.points += 0.5;
        }
    }
    return result;
}

module.exports = damagedOrSunk