/*
在一个字符串中找到字符'abcdef'
不能使用正则表达式
使用状态机
*/

let target = 'abcdef';

let str = '213131ababcdefss';


function match(str) {
  let state = start;
  for (let c of str) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if (c === 'a') return foundA
  return start;
}

function end(c) {
  return end;
}
function foundA(c) {
  if (c === 'b') return foundB
  return start(c);
}
function foundB(c) {
  if (c === 'c') return foundC
  return start(c);
}
function foundC(c) {
  if (c === 'd') return foundD
  return start(c);
}
function foundD(c) {
  if (c === 'e') return foundE
  return start(c);
}
function foundE(c) {
  if (c === 'f') return end
  return start(c);
}

let a = match(str);

// str.includes(target);

// str.split('ab').length > 1

console.log(a);
