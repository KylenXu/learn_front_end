/*
在一个字符串中找到字符'abcdef'
不能使用正则表达式
*/

let target = 'abcdef';

let str = '213131abcdefss';

// function match(str, target) {
//   let len = target.length;
//   for (let i in str) {
//     if (str[i] === target[0] && str.slice(i, Number(i) + len) === target) return true
//   }
//   return false;
// }


function match(str, target) {
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;
  for (let i of str) {
    if (i === target[0]) foundA = true;
    else if (foundA && i === target[1]) foundB = true;
    else if (foundB && i === target[2]) foundC = true;
    else if (foundC && i === target[3]) foundD = true;
    else if (foundD && i === target[4]) foundE = true;
    else if (foundE && i === target[5]) return true;
    else {
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
    }
  }
  return false;
}


let a = match(str, target);

// str.includes(target);

// str.split('ab').length > 1

console.log(a);
