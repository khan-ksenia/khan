// JavaScript source code
//«аполнение матрицы путем ввода по одному элементу
function inputArray(arr, length, width) {
    for (let i = 0; i < length; i++) {
        arr[i] = [];
        for (let j = 0; j < width; j++) {
            arr[i][j] = Number(prompt('Enter the matrix element'));
        }
    }
    return arr
}
//”даление строки матрицы по номеру, указанному в параметре stringNum
function delString(arr, stringNum) {
    arr.splice(stringNum, 1);
    return arr
}

//¬ывод матрицы построчно в строковом типе
function outputArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rowString = arr[i].join(', ');
        console.log(rowString);
    }
}

let A = [];
inputArray(A, 5, 3);
outputArray(A)
console.log(' ')  //дл€ разделени€ матриц в консоли
delString(A, 0);
outputArray(A);

