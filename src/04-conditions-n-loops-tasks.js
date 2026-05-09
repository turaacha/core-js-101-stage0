function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return (
    rect1.left < rect2.left + rect2.width &&
    rect1.left + rect1.width > rect2.left &&
    rect1.top < rect2.top + rect2.height &&
    rect1.top + rect1.height > rect2.top
  );
}

function isInsideCircle(circle, point) {
  const dist = Math.sqrt(
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2
  );
  return dist < circle.radius;
}

function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const leftBracket = isStartIncluded ? '[' : '(';
  const rightBracket = isEndIncluded ? ']' : ')';
  return `${leftBracket}${start}, ${end}${rightBracket}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
  return reversed * Math.sign(num);
}

function isCreditCardNumber(cnn) {
  const arr = String(cnn).split('').map(Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let digit = arr[arr.length - 1 - i];
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  let n = num;
  while (n > 9) {
    n = String(n)
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  }
  return n;
}

function isBracketsBalanced(str) {
  const stack = [];
  const brackets = {
    '[': ']',
    '(': ')',
    '{': '}',
    '<': '>',
  };
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      const last = stack.pop();
      if (brackets[last] !== char) return false;
    }
  }
  return stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) return '';
  if (pathes.length === 1) return pathes[0]; // на всякий случай

  const splitPathes = pathes.map((p) => p.split('/'));
  const common = [];

  for (let i = 0; i < splitPathes[0].length; i += 1) {
    const dir = splitPathes[0][i];
    if (splitPathes.every((p) => p[i] === dir)) {
      common.push(dir);
    } else {
      break;
    }
  }

  if (common.length === 0) return '';

  const res = common.join('/');
  return res.endsWith('/') ? res : `${res}/`;
}

function getMatrixProduct(m1, m2) {
  const result = Array.from({ length: m1.length }, () =>
    Array(m2[0].length).fill(0)
  );
  for (let i = 0; i < m1.length; i += 1) {
    for (let j = 0; j < m2[0].length; j += 1) {
      for (let k = 0; k < m1[0].length; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}

function evaluateTicTacToePosition(position) {
  const lines = [
    ...position, // строки
    [position[0][0], position[1][0], position[2][0]], // колонки
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]], // диагонали
    [position[0][2], position[1][1], position[2][0]],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]; // берем текущую линию (строку, колонку или диагональ)
    if (line[0] && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
