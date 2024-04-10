function getMissingNumber(arr) {
  const sortedArr = arr.toSorted((a, b) => a - b); // in order to get sorted array of number where each number goes one by one

  for (let i = 0; i < sortedArr.length; ++i) {
    // define current number and next number by index
    const currentNumber = sortedArr[i];
    const nextIndex = i + 1;
    const nextNumber = sortedArr[nextIndex];
    // if next number is undefine it means that no more items in array
    if (nextNumber === undefined) {
      return;
    }

    // if the difference is more than 1, we get the missing number
    if (nextNumber - currentNumber !== 1) {
      return currentNumber + 1;
    }
  }
}
module.exports = getMissingNumber;
