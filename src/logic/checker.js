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

    return null;
}

