export default function checker (table) {
    if(table.some(x => x.every(z => z === 'X'))){
        return 'X'
    }

    if(table.some(x => x.every(z => z === 'O'))){
        return 'O'
    }

    if([0,1,2].some(x => table.every(z => z[x] == 'X'))){
        return 'X'
    }

    if([0,1,2].some(x => table.every(z => z[x] == 'O'))){
        return 'O'
    }

    let diagonalTopLeftEqual = 
    table[0][0] === table[1][1] && table[1][1] === table[2][2] && table[1][1] !== ' ';

    let diagonalTopRightEqual = 
    table[2][0] === table[1][1] && table[1][1] === table[0][2] && table[1][1] !== ' ';

    if(diagonalTopLeftEqual)
      return table[0][0]

    if(diagonalTopRightEqual)
      return table[2][0]

    return null;
}

