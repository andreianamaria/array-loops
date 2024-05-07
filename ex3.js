const reverseArray = function (arr) {
  let reversedArr = [];
  let finalIndex = arr.length - 1;
  for (let i = finalIndex; i >= 0; i--) {
      reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const arr = [1, -5, 20, -34, 16, 29, 36, -4];
console.log("Array-ul inversat este: ", reverseArray(arr));

// metoda 2

console.log("Array-ul inversat prin metoda 2 este: ", arr.reverse());


