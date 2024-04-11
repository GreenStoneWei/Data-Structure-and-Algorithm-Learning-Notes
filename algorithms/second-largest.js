function findSecondLargest(sequence) {
  // Write your algorithm here with O(n) time complexity.
  // O(n) time complexity implies that there is no sorting operation, so we simply iterate the whole sequence and keep the top 2 largest value

  // No second element case
  if (sequence.length < 2) {
    return null
  }

  let largest = Number.NEGATIVE_INFINITY
  let secondLargest = Number.NEGATIVE_INFINITY

  for (const value of sequence) {
    if (value > largest) {
      secondLargest = largest
      largest = value
    } else if (value > secondLargest && value !== largest) {
      secondLargest = value
    }
    // console.log('secondLargest', secondLargest)
    // console.log('largest', largest)
  }
  if (secondLargest === Number.NEGATIVE_INFINITY) {
    return null
  }
  return secondLargest
}

console.log(findSecondLargest([1, 0, 1, 2, 1]))
