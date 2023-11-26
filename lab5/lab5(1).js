// JavaScript source code
let matrix = [
    [4, 8, 9],
    [23, 1, 0],
    [-1, 1, 1],
    [34, -6, 8],
    [56, 7, 8],
    [44, -11, 13]
];
let K = 1;
let sum = 0;
let product = 1;
for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][K];
    product *= matrix[i][K];
}
console.log(sum + ' - sum of column elements')
console.log(product + ' - product of column elements')

