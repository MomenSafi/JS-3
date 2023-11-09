function evenNumberEvenIndex(arr) {
    let newarr = [];
    for (let index = 0; index < arr.length; index += 2) {
        if (arr[index] % 2 == 0) {
            newarr.push(arr[index]);
        }
    }
    return newarr;
}

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(nums));


function evenNumberEvenIndex2(arr) {
    let newarr = [];
    let index = 0;

    while (index < arr.length) {
        if (arr[index] % 2 == 0) {
            newarr.push(arr[index]);
        }
        index += 2
    }

    return newarr;
}

console.log(evenNumberEvenIndex2(nums));


