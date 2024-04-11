function findOnce(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let zeroCount = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] - arr[i] === 0) {
        zeroCount++
      }
    }
    if (zeroCount === 1) {
      result.push(arr[i])
    }
  }
  return result
}

const testCase = [1, 1, 2, 3, 4, 5, 6]
const testCase2 = [2, 1, 2, 1, 5, 7, 5, 1, 4]

console.log(findOnce(testCase))
console.log(findOnce(testCase2))
