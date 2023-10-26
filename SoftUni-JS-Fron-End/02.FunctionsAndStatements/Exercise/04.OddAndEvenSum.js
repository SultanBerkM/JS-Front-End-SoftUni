function findsSumOfOddAndEvenDigits(num){
    const sumEvenFlag = (number) => number%2===0;

    const numInStr = num.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numInStr.length; i++) {
        let integer = Number(numInStr[i])

        if(sumEvenFlag(integer)){ evenSum+=integer}
        else{ oddSum+=integer}
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

findsSumOfOddAndEvenDigits(3495892137259234);