// JavaScript source code
let matrix = [
    [4, 8, 9, 22, 6],
    [23, 1, 0, 7, 0],
    [-1, 1, 1, 2, -5],
    [34, -6, 8, 4, 5]
];
let maxValue = matrix[0][0];
let maxValueColumn = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (maxValue < matrix[i][j]) {
            maxValue = matrix[i][j];
            maxValueColumn = j;
        }
    }
}
for (let i = 0; i < matrix.length; i++) {
    matrix[i].splice(maxValueColumn, 1);
}
console.log(maxValue)
console.log(matrix)

