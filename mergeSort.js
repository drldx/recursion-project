function mergeSort(arr) {

  const merge = (l1, l2) => {
    let resArr = [];
    let i = 0, j = 0;

    while (i < l1.length && j < l2.length) {
      if (l1[i] < l2[j]) {
        resArr.push(l1[i]);
        i++
      } else {
        resArr.push(l2[j]);
        j++;
      }
    }

    for (i; i < l1.length; i++) resArr.push(l1[i]);
    for (j; j < l2.length; j++) resArr.push(l2[j]);

    return resArr;
  }

  if (arr.length <= 1) return arr;

  else {
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
  }
}

module.exports = mergeSort;
