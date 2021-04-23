/*
在一个字符串中找到字符'abcabx'
不能使用正则表达式
使用状态机
*/

// let target = 'abcabx';

// let str = 'abcabcabx';

// function match(str) {
//   let state = start;
//   for (let c of str) {
//     state = state(c);
//   }
//   return state === end;
// }

// function start(c) {
//   if (c === 'a') return foundA1
//   return start;
// }

// function end(c) {
//   return end;
// }
// function foundA1(c) {
//   if (c === 'b') return foundB1
//   return start(c);
// }
// function foundB1(c) {
//   if (c === 'c') return foundC
//   return start(c);
// }
// function foundC(c) {
//   if (c === 'a') return foundA2
//   return start(c);
// }
// function foundA2(c) {
//   if (c === 'b') return foundB2
//   return start(c);
// }
// function foundB2(c) {
//   if (c === 'x') return end
  
//   return foundB1(c);
// }

// let a = match(str);

// // str.includes(target);

// // str.split('ab').length > 1

// console.log(a);

/****************************************************
在一个字符串中找到字符'abababx'
不能使用正则表达式
使用状态机
 * 
 */

let target = 'abababx';

let str = 'ababababx';

function match(str) {
  let state = start;
  for (let c of str) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if (c === 'a') return foundA1
  return start;
}

function end(c) {
  return end;
}
function foundA1(c) {
  if (c === 'b') return foundB1
  return start(c);
}
function foundB1(c) {
  if (c === 'a') return foundA2
  return start(c);
}
function foundA2(c) {
  if (c === 'b') return foundB2
  return start(c);
}
function foundB2(c) {
  if (c === 'a') return foundA3
  return start(c);
}
function foundA3(c) {
  if (c === 'b') return foundB3
  return start(c);
}
function foundB3(c) {
  if (c === 'x') return end
  return foundB2(c);
}

let a = match(str);

// str.includes(target);

// str.split('ab').length > 1

console.log(a);