function aveArray(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum/arr.length;
}

function aveArray2(arr) {
let sum = 0;
    let Count = 0;
    while (Count < arr.length) {
        sum += arr[Count];
        Count++;
    }
    return sum/arr.length;
}

var nums = [1, 2, 3, 8, 9];
var nums2 = [1, 2, 3, 8, 9, 77];

console.log(aveArray(nums));
console.log(aveArray(nums2));
console.log(aveArray2(nums));
console.log(aveArray2(nums2));
