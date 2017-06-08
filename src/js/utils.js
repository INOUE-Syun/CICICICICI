export const sum = (x, y) => x + y
export const diff = (x, y) => x - y
export const prod = (x, y) => x * y
export const quot = (x, y) => x / y

/**
 * フィボナッチ
 * F0 = 0,
 * F1 = 1,
 * Fn + 2 = Fn + Fn + 1 (n ≧ 0)
 * @param {*} n
 */
export const fibonacci = (n) => {
  if (n < 0) {
    throw new Error('`n` must be positive number!')
  }
  switch (n) {
    case 0:
      return 0
    case 1:
      return 1
    default:
      return fibonacci(n - 2) + fibonacci(n - 1)
  }
}

/**
 * フィボナッチ（メモ化あり）
 * F0 = 0,
 * F1 = 1,
 * Fn + 2 = Fn + Fn + 1 (n ≧ 0)
 * @param {*} n
 */
let memory = {}
export const fibonacci_on_memory = (n) => {
  if (n < 0) {
    throw new Error('`n` must be positive number!')
  }
  switch (n) {
    case 0:
      return 0
    case 1:
      return 1
    case n in memory:
      return memory[n]
    default:
      const fibonacci = fibonacci_on_memory(n - 2) + fibonacci_on_memory(n - 1)
      memory[n] = fibonacci
      return fibonacci
  }
}
