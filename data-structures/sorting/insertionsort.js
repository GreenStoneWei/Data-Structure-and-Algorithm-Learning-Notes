function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let position = i // 可以插入的位置

    const value = array[i] // 要插入的元素存起來

    // 開始往前找，只要符合這條件就代表這個位置是可以插入的
    // 邊找的時候就可以邊把元素往後挪，騰出空間
    while (i >= 0 && array[position - 1] > value) {
      ;[array[position], array[position - 1]] = [array[position - 1], array[position]]
      position--
    }

    // 找到適合的位置，放入元素
    array[position] = value
  }
  return array
}
