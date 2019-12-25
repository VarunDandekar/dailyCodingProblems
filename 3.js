//#3 Medium
// This problem was asked by Google.
// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s),
// which deserializes the string back into the tree.
// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right

// The following test should pass:
// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class Node {
  constructor(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(node) {
  if(!node){
    return "undefined"
  }
  return "{ val: "+ node.val+" left: "+ serialize(node.left)+" right: "+ serialize(node.right)+" }"
 //return JSON.stringify(node);
}

function deserialize(str){
  //console.log(str)
  const tokens = str.split(" ");
  //console.log(tokens)
  const stack = [];
  for(token of tokens){
    if( token !== '}'){
      if(token === 'undefined'){
        token = undefined;
      }
      stack.push(token);
    } else {
      let t = stack.pop()
      let newStack = []
      while(t!='{'){
        newStack.push(t);
        t = stack.pop()
      };
      //console.log("new stack" , newStack)
      let node = new Node(newStack[4], newStack[2], newStack[0]);
      stack.push(node);
    }
  }
  return stack[0]
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
const newNode = deserialize(serialize(node));
console.log(newNode.left.left.val === 'left.left')