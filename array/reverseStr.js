function reverse(str) {
  // Check valid input
  if (!str || str.length < 2 || typeof str !== 'string') return;

  let arrString = str.split();
  let result = '';

  for (let i = arrString.length - 1; i >= 0; i--) {
    result += arrString[i];
  }

  return result;
}
