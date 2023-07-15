
const fibs = (n) => {
  let res = [0, 1];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 2] + res[i - 1]);
  }
  return res;
};

const fibsrec = (n) => {
  return n == 2 ? [0, 1] : fibsrec(n - 1).concat((fibsrec(n - 1)[n - 3] + fibsrec(n - 1)[n - 2]));
}

console.log('fibs(8) should be : \t0,1,1,2,3,5,8,13\nfibs(8) = \t\t' + fibs(8));
console.log('fibsrec(8) should be : \t0,1,1,2,3,5,8,13\nfibsrec(8) = \t\t' + fibsrec(8));