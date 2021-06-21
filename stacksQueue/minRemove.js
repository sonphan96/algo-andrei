// a)bc(d)
// (ab(c)d
// ))((

const minRemoveToMakeValid = function (str) {
  const res = str.split('');
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')' && !stack.length) {
      res[i] = '';
    }
  }

  while (stack.length) {
    const currentIndex = stack.pop();
    res[currentIndex] = '';
  }

  return res.join('');
};
