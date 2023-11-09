function minInArray(arr) {
    let temp = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (temp > arr[index]) {
            temp = arr[index];
        }
    }
    return temp;
}

var nums = [10, 2, 3, 8, 9];
console.log(minInArray(nums));

function minInArray2(arr) {
    let temp = arr[0];
    let index = 1;
    while (index < arr.length) {
        if (temp > arr[index]) {
            temp = arr[index];
        }
        index++;
    }
    return temp;
}

var nums = [1, 2, 3, 8, 9];
console.log(minInArray2(nums));

