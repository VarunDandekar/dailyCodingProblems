//#7 [Medium]
// This problem was asked by Facebook.
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
// count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
// You can assume that the messages are decodable. For example, '001' is not allowed.

const INPUT = "11221";
let count = 0;

function parse(inp) {
  console.log("#####", inp);
  if (inp.indexOf("0") > -1) {
    return;
  }
  if (inp.length == 0) {
    count++;
    return;
  }
  if (Number(inp[0]) > 0) {
    parse(inp.substring(1));
  }
  if (
    inp.length > 1 &&
    Number(inp.substring(0, 2)) < 27 &&
    Number(inp.substring(0, 2)) > 0
  ) {
    parse(inp.substring(2));
  }
}

parse(INPUT);
console.log(count);
