function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(a, b) {
  return a + (b - a) / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  // Используем теорему Пифагора: корень из суммы квадратов разностей координат
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  // a*x + b = 0  =>  a*x = -b  =>  x = -b / a
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  // Формула угла через скалярное произведение и длины векторов
  const scalarProduct = x1 * x2 + y1 * y2;
  const length1 = Math.sqrt(x1 * x1 + y1 * y1);
  const length2 = Math.sqrt(x2 * x2 + y2 * y2);
  return Math.acos(scalarProduct / (length1 * length2));
}

function getLastDigit(value) {
  // Остаток от деления на 10 всегда дает последнюю цифру
  return Math.abs(value % 10);
}

function parseNumberFromString(value) {
  return Number(value);
}

function getParallelepipedDiagonal(a, b, c) {
  // Диагональ параллелепипеда: корень из (a² + b² + c²)
  return Math.sqrt(a * a + b * b + c * c);
}

function roundToPowerOfTen(num, pow) {
  // Чтобы округлить до степени 10, делим на 10^pow, округляем и умножаем обратно
  const multiplier = 10 ** pow;
  return Math.round(num / multiplier) * multiplier;
}

function isPrime(n) {
  if (n <= 1) return false;
  // Проверяем делители от 2 до корня из n
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

function toNumber(value, def) {
  const result = Number(value);
  // Если результат Number() это NaN, возвращаем значение по умолчанию
  return Number.isNaN(result) ? def : result;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
