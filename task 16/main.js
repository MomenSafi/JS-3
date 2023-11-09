function oddArray(arr) {
    let oddarr= [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 !=0) {
            oddarr.push(arr[index]);
        }
    }

    return oddarr;
}

var nums = [1, 2, 3, 8, 9];
console.log(oddArray(nums));

function oddArray2(arr) {
    let oddarr = [];

    let index = 0;

    while (index < arr.length) {
        if (arr[index] % 2 !=0) {
            oddarr.push(arr[index]);
        }
        index++;
    }

    return oddarr;
}

var nums = [1, 2, 3, 8, 9];
console.log(oddArray2(nums));

