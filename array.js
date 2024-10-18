export function findMax(arr) {
    var maxNumber = arr[0];

    for (var i = 1; i < arr.length; i++) {
    var currentNumber = arr[i];
    if(currentNumber > maxNumber) {
        maxNumber = currentNumber
    }
    }
    return maxNumber;
} 


export function reverseArray(arr) {
     var newArr = [];
     for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
     }
     return newArr;
}

