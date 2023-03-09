const soma = (...nums) => nums.reduce((acc, num) => acc + num, 0)
const nums = [1, 2, 3, 4, 5, 6]
console.log(soma(...nums, 21))
console.log(soma(...nums, 22))
console.log(soma(...nums, 7))
