function removeFromArray(arr, ele) {
    let temp;
    for (let index = 0; index < arr.length; index++) {
        if (ele == arr[index]) {
            for (let j = index; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
            }
            arr.length--;
        }
    }

    return arr;
}

var nums = [1, 2, 3, 8, 9];
removeFromArray(nums, 8);
console.log(nums);

function removeFromArray2(arr, ele) {
    let temp;
    let index = 0

    while (index < arr.length) {
        if (ele == arr[index]) {
            let j = index;
            while (j < arr.length - 1) {
                arr[j] = arr[j + 1];
                j++;
            }
            arr.length--;
        }
        index++;
    }

    return arr;
}

var nums = [1, 2, 3, 8, 9];
removeFromArray2(nums, 8);
console.log(nums);



