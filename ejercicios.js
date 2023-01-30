/**
 * Full Stack JavaScript - Full Stack 41
 * Sprint 3 - JS Exercises
 * Responsable: Andrea Servin
 */

/**
 * EJERCICIO 1
 */
function twoStrings(input) {
  let result = true
  let array = input.split('\n')
  array.shift()
  array.pop()
  for (let substring of array) {
    const [str1, str2] = substring.trim().split(' ')
    const arr = str2.split('')
    result = arr.reduce((accumulator, currentValue) => accumulator && str1.includes(currentValue), result)
    console.log(result ? 'YES' : 'NO')
    result = true
  }
}

// TEST
const input = `
      hello eellloh
      aa ab
      aaa aba
      abcd daabbcc
      abcd aefgh
  `
twoStrings(input)

/**
 * EJERCICIO 2
 */
function generate(number) {
  return [...Array(number).keys()].map(item => { return () => console.log(item) })
}

// TEST
const a = generate(5)
a[1]()