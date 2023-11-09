function repeatChar(str, ch) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (ch == str[index]) {
            count++;
        }
    }
    return count;
}


var string = "alex mercer madrasa rashed2 emad hala";

console.log(repeatChar(string, "a"));
console.log(repeatChar(string, "z"));



function repeatChar2(str, ch) {
    let count = 0;
    let index = 0;

    while (index < str.length) {
        if (ch == str[index]) {
            count++;
        }
        index++;
    }

    return count;
}


console.log(repeatChar2(string, "a"));
console.log(repeatChar2(string, "z"));
