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

// Sliding window technique
// "abccabb"
//

const lengthOfLongestSubstring2 = function (s) {
  if (s.length <= 1) return s.length;

  const seenChars = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const preSeenChar = seenChars[currentChar];

    if (preSeenChar >= left) {
      left = preSeenChar + 1;
    }

    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};
