//#2 [Hard]
// This problem was asked by Uber.
// Given an array of integers, return a new array such
//that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5],
//the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

const input = [1, 2, 3, 4, 5];
const output = input.map((num, index) => {
  let prod = 1;
  input.forEach((n, i) => {
    if (index !== i) {
      prod *= n;
    }
  });
  return prod;
});

console.log(output);
