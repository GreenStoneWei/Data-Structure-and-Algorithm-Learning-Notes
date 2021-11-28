function binarySearch(array, target, start = 0, end = array.length - 1) {
  let midIndex = Math.floor((end - start) / 2 + start)

  if (array[midIndex] === target) {
    return true
  }
  if (end - start === 0) {
    return false
  }
  if (array[midIndex] < target) {
    return binarySearch(array, target, midIndex + 1, end)
  }
  if (array[midIndex] > target) {
    return binarySearch(array, target, start, midIndex)
  }
}
