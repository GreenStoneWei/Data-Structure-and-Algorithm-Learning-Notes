const testArray = [12, 0, 3, 9, 2, 21, 18, 27, 1, 5, 8, -1, 8]

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quickSortNaive(array) {
  if (array.length === 0 || array.length === 1) {
    return array
  }
  const pivot = array[Math.floor(array.length / 2)]
  const less = array.filter((ele) => ele < pivot)
  const equal = array.filter((ele) => ele === pivot)
  const greater = array.filter((ele) => ele > pivot)
  return [...quickSortNaive(less), ...equal, ...quickSortNaive(greater)]
}

// console.log(quickSortNaive([5, 4, 2, 7, 1, 8, 6]))

/**
 * always choose the last element as the pivot
 * @param {number[]} array
 * @param {number} low
 * @param {number} high
 */
function _partitionLomuto(array, low, high) {
  const pivot = array[high]
  let i = low

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      swap(array, i, j)
      i++
    }
  }
  swap(array, i, high)
  return i
}

function quickSortLomuto(array, low, high) {
  if (low < high) {
    let pivot = _partitionLomuto(array, low, high)
    quickSortLomuto(array, low, pivot - 1)
    quickSortLomuto(array, pivot + 1, high)
  }
  return array
}

// console.log(quickSortLomuto(testArray, 0, testArray.length - 1))

/**
 * always choose the first element as the pivot
 * @param {number[]} array
 * @param {number} low
 * @param {number} high
 */
function _partitionHoare(array, low, high) {
  const pivot = array[low]
  let i = low // FIXME:
  let j = high + 1

  while (true) {
    // FIXME:
    console.log('1')
    while (array[j] > pivot) {
      j -= 1
    }
    while (array[i] < pivot) {
      i += 1
    }
    if (i < j) {
      swap(array, i, j)
    } else {
      return j
    }
  }
}

function quickSortHoare(array, low, high) {
  if (low < high) {
    let pivot = _partitionHoare(array, low, high)
    console.log('pivot>>', pivot)
    quickSortLomuto(array, low, pivot)
    quickSortLomuto(array, pivot + 1, high)
  }
  return array
}

// console.log(quickSortHoare(testArray, 0, testArray.length - 1))

function _medianOfThree(array, low, high) {
  const center = Math.floor((low + high) / 2) //
  if (array[low] > array[center]) {
    swap(array, low, center)
  }
  if (array[low] > array[high]) {
    swap(array, low, high)
  }
  if (array[center] > array[high]) {
    swap(array, center, high)
  }
  return center
}

function quickSortMedian(array, low, high) {
  if (low < high) {
    let pivotIndex = _medianOfThree(array, low, high)
    swap(array, pivotIndex, high)
    let pivot = _partitionLomuto(array, low, high)
    quickSortLomuto(array, low, pivot - 1)
    quickSortLomuto(array, pivot + 1, high)
  }
  return array
}

console.log(quickSortMedian(testArray, 0, testArray.length - 1))

function _partitionDutchFlag(array, low, high, pivotIndex) {
  const pivot = array[pivotIndex]
  let smaller = low
  let equal = low
  let larger = high

  while (equal <= larger) {
    if (array[equal] < pivot) {
      swap(array, smaller, equal)
      smaller += 1
      equal += 1
    } else if (array[equal] === pivot) {
      equal += 1
    } else {
      swap(array, equal, larger)
      larger -= 1
    }
  }
  return [smaller, larger]
}

function quickSortDutchFlag(array, low, high) {
  if (low < high) {
    const pivotIndex = random(low, high)
    const [middleFirst, middleLast] = _partitionDutchFlag(array, low, high, pivotIndex)
    quickSortDutchFlag(array, low, middleFirst - 1)
    quickSortDutchFlag(array, middleLast + 1, high)
  }
  return array
}
