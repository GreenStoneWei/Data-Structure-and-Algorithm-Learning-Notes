function one2ten(i, j) {
  if (i < j + 1) {
    console.log(i)
    one2ten(i + 1, j)
  }
}

// one2ten(1,10);

function sum(min, max) {
  if (min === max) {
    return max
  } else {
    return min + sum(min + 1, max)
  }
}
let result = sum(0, 10)

// console.log(result);

function power(x, y) {
  if (y === 1) {
    return x
  } else {
    return x * power(x, y - 1)
  }
}
// let result1 = power(3,4);
// console.log(result1);

// 輾轉相除法
function gcd(x, y) {
  if (x > y) {
    if (x % y === 0) return y
    return gcd(x % y, y)
  } else if (y > x) {
    if (y % x === 0) return x
    return gcd(x, y % x)
  }
}
// gcd(18,6)
// let result3 = gcd(21,6);
// console.log('ans: '+result3);

// Fabonacci 數列 get number n
// 0, 1, 1, 2, 3, 5, 8

function findFibonacci(n) {
  if (n <= 0) {
    return
  } else if (n === 1) {
    return 0
  } else if (n === 2) {
    return 1
  } else {
    return findFibonacci(n - 1) + findFibonacci(n - 2)
  }
}

// let result4 = findFabonacci(6);
// console.log(result4);

function listFibonacci(n) {
  if (n < 0) {
    return
  } else if (n === 0) {
    console.log(0)
    return 0
  } else if (n === 1) {
    console.log(1)
    return 1
  } else {
    let prev = listFibonacci(n - 1)
    let prev2 = listFibonacci(n - 2)
    console.log(prev + prev2)
    return listFibonacci(n - 1)
  }
}
listFibonacci(5)

function fibonacciSeries(n) {
  if (n === 1) {
    return [0, 1]
  } else {
    let s = fibonacciSeries(n - 1)
    s.push(s[s.length - 1] + s[s.length - 2])
    return s
  }
}

function pengFib(n1, n2, min, max) {
  console.log(n1)
  if (min < max) {
    fib(n2, n1 + n2, min + 1, max)
  }
}
