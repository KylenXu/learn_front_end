/*
在一个字符串中找到字符'ab'
不能使用正则表达式
*/

let target = 'ab';

let str = 'abba';

// function match(str, target) {
//   for (let i in str) {
//     if (str[i] === target[0] && str[Number(i) + 1] === target[1]) {
//       return true;
//     }
//   }
//   return false;
// }

function match(str, target) {
  let foundA = false;
  for (let i of str) {
    if (i === target[0]) foundA = true
    else if (foundA && i === target[1]) return true
    else foundA = false
  }
  return false;
}

let a = match(str, target);

// str.includes(target);

// str.split('ab').length > 1

console.log(a);
