function lzwdecompression(inputString) {
  const binaryArray = inputString.split(" ");
  let intArray = [];
  for (const array of binaryArray) {
    for (let ccc = 0; ccc < array.length; ccc++) {
      if (array[ccc] !== "0" && array[ccc] !== "1") {
        return "Wrong format! Only accepting binary string with space delimiter."; // Found an element that is not "0" or "1"
      }
    }
    intArray.push(parseInt(array, 2));
  }
  const len = intArray.length;
  let i;
  let j;
  let currentCharMap = 256;
  let result = "";

  // Populate the charMap with ascii
  const charMap = new Map();
  for (i = 0; i < 256; i++) {
    charMap.set(i, String.fromCharCode(i));
  }

  // Complete the charMap
  i = 0;
  while (i < len) {
    if (charMap.has(intArray[i + 1])) {
      let newStr =
        charMap.get(intArray[i]) + charMap.get(intArray[i + 1]).substring(0, 1);
      charMap.set(currentCharMap++, newStr);
    } else {
      let tempI = i;
      while (intArray[tempI] < 256) {
        tempI--;
      }
      let newStr =
        charMap.get(intArray[tempI]) +
        charMap.get(intArray[tempI]).substring(0, 1);
      charMap.set(currentCharMap++, newStr);
    }
    i++;
  }

  for (const array of intArray) {
    result += charMap.get(array);
  }

  return result;
}

module.exports = lzwdecompression;
