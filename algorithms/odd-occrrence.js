function oddOccurrence(arr) {
  let unpaired = []
  for (let i = 0; i < arr.length; i++) {
    const index = unpaired.indexOf(arr[i])
    if (index === -1) {
      unpaired.push(arr[i])
    } else {
      unpaired.splice(index, 1)
    }
  }
  return unpaired[0]
}

console.log(oddOccurrence([1, 2, 3, 1, 5, 3, 2]))
