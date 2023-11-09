function sumArray(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}


function sumArray2(arr) {
    let sum = 0;
    let Count = 0;
    while (Count < arr.length) {
        sum += arr[Count];
        Count++;
    }
    return sum;
}

var nums = [1, 2, 3, 8, 9];
console.log(sumArray(nums));
var nums = [1, 2, 3, 8, 9];
console.log(sumArray2(nums));