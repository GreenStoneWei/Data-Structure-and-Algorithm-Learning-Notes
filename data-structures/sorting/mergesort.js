function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))

  function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
}

const testCase1 = [5, 10, 9, 4, 6, 1, 12]
const testCase2 = [11, 9, 3, 6, 15, 4, 7]

console.log(mergeSort(testCase1))
