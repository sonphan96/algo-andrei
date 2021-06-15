// "aabaa"
// "aabbaa"
// "a"
// ""
// " a man, a plan, a canal: Panama"

// compare against reverse
const validPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let rev = '';

  // generate a reverse string using a reverse for loop.
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev === s;
};

// 2 pointers from outside
const isValidPalindrome2 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // initialize left/right pointers at start and end of string respectively
  let left = 0;
  right = s.length - 1;

  // loop through string characters while comparing them, then move the pointers closer to the center
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// 2 pointers from center
const isValidPalindrome3 = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
  let left = Math.floor(s.length / 2),
    right = left;

  // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
  if (s.length % 2 === 0) {
    left--;
  }

  // loop through the string while expanding pointers outwards comparing the characters.
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false;
    }

    left--;
    right++;
  }

  return true;
};
