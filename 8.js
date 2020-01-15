//#8 [Easy]
// This problem was asked by Google.
// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
// Given the root to a binary tree, count the number of unival subtrees.
// For example, the following tree has 5 unival subtrees:
//    1
//   / \
//  0   0
//     / \
//    1   1
//   / \
//  1   1

class node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree = new node(
  "1",
  new node("0", null, null),
  new node(
    "0",
    new node("1", new node("1", null, null), new node("1", null, null)),
    new node("1", null, null)
  )
);

let count = 0;
function checkUniversal(root) {
  if (!root) {
    return;
  }

  //leaf node
  if (!root.left && !root.right) {
    count++;
    console.log(root.val);
    return root.val;
  }

  const lval = checkUniversal(root.left);
  const rval = checkUniversal(root.right);

  if(!root.left && root.right){
    if(root.val === lval){
      count++
      return root.val
    }
  }

  if(root.left && !root.right){
    if(root.val === rval){
      count++
      return root.val
    }
  }

  if(root.val === lval && root.val === rval){
    count++
    return root.val
  }
}

checkUniversal(tree);
console.log(count);
