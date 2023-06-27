function lzwcompression(inputString) {
  const len = inputString.length;
  let result = "";
  let i;
  let j;
  let currentCharMap = 256;

  // Populate the charMap with ascii
  const charMap = new Map();
  for (i = 0; i < 256; i++) {
    charMap.set(i, String.fromCharCode(i));
  }

  i = 0;
  j = 0;
  while (i != len) {
    j = i;
    while (
      Array.from(charMap.values()).includes(inputString.substring(i, j + 1)) &&
      j < len
    ) {
      j++;
    }
    charMap.set(currentCharMap, inputString.substring(i, j + 1));
    currentCharMap++;
    for (const [key, value] of charMap.entries()) {
      if (value === inputString.substring(i, j)) {
        result += key.toString(2) + " ";
        break;
      }
    }
    i = j;
  }

  return result.substring(0, result.length - 1);
}

module.exports = lzwcompression;
