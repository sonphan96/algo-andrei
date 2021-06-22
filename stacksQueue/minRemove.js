// a)bc(d)
// (ab(c)d
// ))((

const minRemoveToMakeValid = function (str) {
  const res = str.split(''); // O(n)
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    // O(n)
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')' && !stack.length) {
      res[i] = '';
    }
  }

  while (stack.length) {
    // O (n)
    const currentIndex = stack.pop();
    res[currentIndex] = '';
  }

  return res.join(''); // O(n)
};

// Time: O(4n)
// space: O(2n)
