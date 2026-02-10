

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++)
    if (n % i === 0) return false;
  return true;
};

const hcf = (a, b) => (b === 0 ? a : hcf(b, a % b));
const lcm = (a, b) => (a * b) / hcf(a, b);

exports.process = async (body) => {

  if (body.fibonacci !== undefined) {
    const n = body.fibonacci;
    if (n < 0) throw { status: 400, message: "Invalid fibonacci input" };

    let res = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      res.push(a);
      [a, b] = [b, a + b];
    }
    return res;
  }

  if (body.prime) {
    return body.prime.filter(isPrime);
  }

  if (body.lcm) {
    return body.lcm.reduce(lcm);
  }

  if (body.hcf) {
    return body.hcf.reduce(hcf);
  }

  

  throw { status: 400, message: "Invalid request body" };
};