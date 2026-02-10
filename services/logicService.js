exports.fibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) throw new Error("Invalid input");
  let a = 0, b = 1;
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(a);
    [a, b] = [b, a + b];
  }
  return res;
};

exports.prime = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Invalid input");

  return arr.filter(num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcmTwo = (a, b) => (a * b) / gcd(a, b);

exports.lcm = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) throw new Error("Invalid input");
  return arr.reduce((a, b) => lcmTwo(a, b));
};

exports.hcf = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) throw new Error("Invalid input");
  return arr.reduce((a, b) => gcd(a, b));
};
