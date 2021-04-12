let target = 'a';

let str = "helloa";

function match(str, target) {
  for (let i of str) {
    if (i === target) {
      return true;
    }
  }
  return false;
}

// str.includes(target)
// str.split('').find((item) => item === target)





