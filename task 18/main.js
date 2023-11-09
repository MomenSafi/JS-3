function shorterInArray(arr) {
    let temp= arr[0];

    for (let index = 1; index < arr.length; index++) {
        if (temp.length > arr[index].length) {
            temp = arr[i];
        }
    }
    return temp;
}


var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArray(strings));



function shorterInArray2(arr) {
    let temp = arr[0];
    let index = 1;

    while (index < arr.length) {
        if (temp.length > arr[index].length) {
            temp = arr[index];
        }
        index++;
    }

    return temp;
}

console.log(shorterInArray2(strings));
