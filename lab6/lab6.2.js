// JavaScript source code
//���������� ������� ����� ����� �� ������ ��������
function inputArray(arr, length, width) {
    for (let i = 0; i < length; i++) {
        arr[i] = [];
        for (let j = 0; j < width; j++) {
            arr[i][j] = Number(prompt('Enter the matrix element'));
        }
    }
    return arr
}
//�������� ������ ������� �� ������, ���������� � ��������� stringNum
function delString(arr, stringNum) {
    arr.splice(stringNum, 1);
    return arr
}

//����� ������� ��������� � ��������� ����
function outputArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let rowString = arr[i].join(', ');
        console.log(rowString);
    }
}

let A = [];
inputArray(A, 5, 3);
outputArray(A)
console.log(' ')  //��� ���������� ������ � �������
delString(A, 0);
outputArray(A);

