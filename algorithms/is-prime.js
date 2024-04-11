function isPrime(num) {
  // code below
  if (num < 2) return false
  if (typeof num !== 'number') return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

function isPrime2(num) {
  if (isNaN(num)) {
    return false
  }

  if (num <= 1) {
    return false
  }

  if (num === 2) {
    return true
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
