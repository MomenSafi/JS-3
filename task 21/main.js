function powerElementIndex(arr) {
    for (let index = 0; index < arr.length; index++) {
        arr[index] = Math.pow(arr[index], index);
    }
    return arr;
}

var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));
