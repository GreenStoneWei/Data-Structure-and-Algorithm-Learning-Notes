function solution(a) {
  var indexOfMinimum = -1
  var minimalSum = Number.MAX_VALUE

  for (let i = 0; i < a.length; i++) {
    var sum = 0
    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j])
    }
    if (sum < minimalSum) {
      minimalSum = sum
      indexOfMinimum = i
    }
  }

  return a[indexOfMinimum]
}

console.log(solution([2, 4, 7]))
