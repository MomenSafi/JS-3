function evenIndexOddLength(arr) {
    let temp = [];

    for (let Index = 0; Index < strings.length; Index += 2) {
        if (strings[Index].length % 2 !== 0) {
            temp.push(strings[Index]);
        }
    }

    return temp;
}

function evenIndexOddLength2(strings) {
    let temp = [];
    let index = 0;

    while (index < strings.length) {
        if (strings[index].length % 2 !== 0) {
            temp.push(strings[index]);
        }
        index += 2;
    }

    return temp;
}



var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));
console.log(evenIndexOddLength2(strings));