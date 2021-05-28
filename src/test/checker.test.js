const checker = require('../logic/checker').default;

test('can find 3 horizontal match', () => {
    const gameTable = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ];

    expect(checker(gameTable)).toBe('X');
});

test('can find 3 horizontal match', () => {
    const gameTable = [
        [' ', ' ', ' '],
        ['O', 'O', 'O'],
        [' ', ' ', ' '],
      ];

    expect(checker(gameTable)).toBe('O');
});

test('can find 3 vertical match', () => {
    const gameTable = [
        ['X', ' ', ' '],
        ['X', 'O', 'O'],
        ['X', ' ', ' '],
      ];

    expect(checker(gameTable)).toBe('X');
});

test('can find 3 vertical match', () => {
    const gameTable = [
        ['X', ' ', ' '],
        [' ', 'O', 'O'],
        ['X', ' ', ' '],
      ];

    expect(checker(gameTable)).toBe(null);
});

test('can find 3 diag right match', () => {
  const gameTable = [
      ['X', ' ', ' '],
      ['X', 'X', 'O'],
      [' ', ' ', 'X'],
    ];

  expect(checker(gameTable)).toBe('X');
});

test('can find 3 diag left match', () => {
  const gameTable = [
      [' ', ' ', 'X'],
      [' ', 'X', 'O'],
      ['X', ' ', 'O'],
    ];

  expect(checker(gameTable)).toBe('X');
});