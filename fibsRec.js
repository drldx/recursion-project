function fibsRec(n) {
  console.log('this line is printed recursively');

  if (n <= 0) return [0];
  if (n === 1) return [0, 1];
  else {
    let before = fibsRec(n - 1);
    let l = before.length;
    before.push(before[l - 1] + before[l - 2]);
    return before;
  }
}


console.log(fibsRec(8));
