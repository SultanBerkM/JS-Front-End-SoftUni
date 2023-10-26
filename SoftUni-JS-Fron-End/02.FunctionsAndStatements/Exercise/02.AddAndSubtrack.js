function mathematicalOperations(...numbers){

    const sumsFristTwoDigits = (numOne, numTwo) => numOne + numTwo;
    const subtrackFirstSumAndThirdNumcc = (sum, thirdNum) => sum(numbers[0], numbers[1]) - thirdNum;

    result = subtrackFirstSumAndThirdNumcc(sumsFristTwoDigits, numbers[2]);
    console.log(result);
}

mathematicalOperations(23, 6, 10);
