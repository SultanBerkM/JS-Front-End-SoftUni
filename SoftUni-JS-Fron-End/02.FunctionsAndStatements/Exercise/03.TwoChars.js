function printAllCharsBetwenTwo(firstChar, secondChar){

    function findTheBiggestChar(charOne, charTwo){
        return charOne > charTwo ? charOne.charCodeAt(0) : charTwo.charCodeAt(0)
    }
    function findTheSmallestChar(charOne, charTwo){
        return charOne > charTwo ? charTwo.charCodeAt(0) : charOne.charCodeAt(0)
    }

    let charOne = findTheBiggestChar(firstChar, secondChar);
    let charTwo = findTheSmallestChar(firstChar, secondChar);

    let result = [];

    for (let i = charTwo + 1; i < charOne; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}
printAllCharsBetwenTwo('C', '#');