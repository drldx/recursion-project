const mergeSort = require('./mergeSort');

test('sample', () => {
  expect(mergeSort([9, 2, 5, 8, 1, 3, 7, 4, 0])).toEqual([0, 1, 2, 3, 4, 5, 7, 8, 9]);
});
test('empty array', () => {
  expect(mergeSort([])).toEqual([]);
});
test('sorted array', () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
});
test('fibonacci sequence', () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
test('large numbers', () => {
  expect(mergeSort([105, 79, 110, 100])).toEqual([79, 100, 105, 110]);
})
