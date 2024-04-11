var reverseString = function (s) {
  let resultS = []
  for (let i = s.length - 1; i >= 0; i--) {
    resultS.push(s[i])
  }
  return resultS
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
