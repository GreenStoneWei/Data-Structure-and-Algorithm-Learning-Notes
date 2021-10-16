function isValid(s: string): boolean {
  const pMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const length = s.length
  const result = []
  for (let i = 0; i < length; i++) {
    if (Object.keys(pMap).includes(s[i])) {
      result.push(s[i])
    } else {
      const last = result[result.length - 1]
      if (pMap[last] === s[i]) {
        result.pop()
      } else {
        return false
      }
    }
  }
  if (result.length > 0) {
    return false
  }
  return true
}
