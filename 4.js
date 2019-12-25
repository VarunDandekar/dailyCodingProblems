//#4 [Hard]
// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

let input = [1, 2, 2];

input = input.filter(i => i > 0 && i < input.length);

input.forEach(i => {
  input[Math.abs(i) - 1] =
    input[Math.abs(i) - 1] > 0
      ? input[Math.abs(i) - 1] * -1
      : input[Math.abs(i) - 1];
});

let i;
for (i = 1; i <= input.length; i++) {
  if (input[i - 1] > 0) {
    break;
  }
}

console.log(i);
