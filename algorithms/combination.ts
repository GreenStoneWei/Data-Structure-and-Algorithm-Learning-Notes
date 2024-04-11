/**
 * 給定不重複正整數 m 種類型 m1 m2 m3 ...，每種類型對應正整數數量為 n1 n2 n3 ...，需要取出 0 到正整數 p 個任意類型，請列出所有取法。
 * 上述問題舉例：Apple 有三個、Banana 有兩個、Citron 有四個，要取出三個
 * 則取法有 Apple x 3、Apple x 2 + Banana x 1、Apple x 2 + Citron x 1、Apple x 1 + Banana x 2、Apple x 1 + Banana x 1 + Citron x 1、等等。
 * 以此例子 m1 為 Apple，n1 為 3，後面以此類推。
 * 另外，取法是無順序的，舉例：Apple x 2 + Banana x 1 和 Banana x 1 + Apple x 2 算是同一種取法
 */

// 取 0 - p 個
// m = n.length
// x + y + z +++ m 個 = total
// c total 取 m-1
function combination(n: number[], get: number) {
  const total = n.reduce((previous, current) => previous + current, 0)
  const speciesNo = n.length // m
  return (getFactorial(total) / getFactorial(speciesNo - 1)) * getFactorial(total - (speciesNo - 1))
}

function getFactorial(input: number) {
  let val = 1
  for (let i = 2; i <= input; i++) {
    val *= i
  }
  return val
}

console.log(combination([2, 3, 4], 6))
