// brute force

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }

  let longest = 0;

  for (let p1 = 0; p1 < s.length; p1++) {
    let seenChars = {};
    let currentLength = 0;

    for (let p2 = p1; p2 < s.length; p2++) {
      const currentChar = s[p2];

      if (seenChars[currentChar]) {
        break;
      } else {
        seenChars[currentChar] = true;
        currentLength++;
        longest = Math.max(currentLength, longest);
      }
    }
  }

  return longest;
};
