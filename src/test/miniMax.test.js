const miniMax = require('../logic/miniMax').default;

test('game wins on one move, vertical', () => {
    const gameTable = [
        ['O', 'X', 'X'],
        ['O', ' ', ' '],
        [' ', ' ', ' '],
      ];

    const miniMaxResult = JSON.stringify(miniMax(gameTable, 'O'))

    expect(miniMaxResult).toBe(JSON.stringify([
        ['O', 'X', 'X'],
        ['O', ' ', ' '],
        ['O', ' ', ' '],
      ]));
});

test('game wins on one move, horizontal', () => {
    const gameTable = [
        ['O', 'O', ' '],
        ['X', ' ', 'X'],
        [' ', ' ', ' '],
      ];

    const miniMaxResult = JSON.stringify(miniMax(gameTable, 'O'))

    expect(miniMaxResult).toBe(JSON.stringify([
        ['O', 'O', 'O'],
        ['X', ' ', 'X'],
        [' ', ' ', ' '],
      ]));
});