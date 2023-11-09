function middleOfArray(arr) {
    if (arr.length % 2 == 0) {
        console.log (arr[arr.length / 2 - 1] + " and " + arr[arr.length / 2]);
    } else {
        console.log(arr[Math.floor(arr.length / 2)]);
    }
}

middleOfArray([1, 4, 5, 6]);

middleOfArray([1, 4, 5]);


