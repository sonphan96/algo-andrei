// brute force

const buildString = function (str) {
  const buildArray = [];

  for (let p = 0; p < str.length; p++) {
    if (str[p] !== '#') {
      buildArray.push(str[p]);
    } else {
      buildArray.pop();
    }
  }

  return buildArray; // O(n)
};

const backspaceCompare = function (S, T) {
  const finalS = buildString(S); // O(a)
  const finalT = buildString(T); // O(b)

  if (finalS.length !== finalT.length) {
    return false;
  }

  for (let p = 0; p < finalS.length; p++) {
    if (finalS[p] !== finalT[p]) {
      // O(a) or O( b)
      return false;
    }
  }

  return true; // O (a + b)
};

// optimize
const backspaceCompare2 = function (S, T) {
  let p1 = S.length - 1,
    p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          p1--;
          backCount--;
          if (S[p1] === '#') {
            backCount = backCount + 2;
          }
        }
      }

      if (T[p2] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          p2--;
          backCount--;

          if (T[p2] === '#') {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};
