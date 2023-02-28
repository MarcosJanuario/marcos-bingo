export const generateRandomId = (): string => {
  const array = new Uint32Array(2);
  window.crypto.getRandomValues(array);
  return `${array[0]}${array[1]}`;
};

export const createUnorderedMatrix = (): (string | number)[][] => {
  // Initialize the 5x5 matrix with empty strings
  const matrix: (string | number)[][] = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ];

  // Generate an array of numbers from 1 to 24 in random order
  const numbers = [];
  for (let i = 1; i <= 24; i++) {
    numbers.push(i);
  }
  numbers.sort(() => Math.random() - 0.5); // Shuffle the array randomly

  // Place the shuffled numbers in the matrix, skipping the middle element
  let counter = 0;
  const middleIndex = Math.floor(matrix.length / 2);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === middleIndex && j === middleIndex) {
        matrix[i][j] = '';
      } else {
        matrix[i][j] = numbers[counter];
        counter++;
      }
    }
  }

  return matrix;
};

export const hasBingo = (matrix: any[][], nums: number[]) => {
  // Check rows
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    let emptyCount = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '') {
        emptyCount++;
      } else if (nums.includes(matrix[i][j])) {
        count++;
      }
    }
    if (count + emptyCount === matrix[i].length && count >= 4) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    let emptyCount = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] === '') {
        emptyCount++;
      } else if (nums.includes(matrix[j][i])) {
        count++;
      }
    }
    if (count + emptyCount === matrix.length && count >= 4) {
      return true;
    }
  }

  // Check diagonals
  let diag1Count = 0;
  let diag1EmptyCount = 0;
  let diag2Count = 0;
  let diag2EmptyCount = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] === '') {
      diag1EmptyCount++;
    } else if (nums.includes(matrix[i][i])) {
      diag1Count++;
    }
    if (matrix[i][matrix.length - i - 1] === '') {
      diag2EmptyCount++;
    } else if (nums.includes(matrix[i][matrix.length - i - 1])) {
      diag2Count++;
    }
  }
  if (diag1Count + diag1EmptyCount === matrix.length && diag1Count >= 4) {
    return true;
  }
  if (diag2Count + diag2EmptyCount === matrix.length && diag2Count >= 4) {
    return true;
  }

  return false;
};
