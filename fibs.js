function fibs(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      res.push(i);
    }
    else {
      res.push((res[i - 1]) + (res[i - 2]))
    }
  }
  return res;
}

console.log(fibs(8));
