function DividesTwoNumsFactorial(numberOne, numberTwo){
    let result = 1;
    function factorialSum(number, result){
        for (let index = 1; index <= number; index++) {
            result *=index
        }
        return result;
    }
    let division = factorialSum(numberOne, result) / factorialSum(numberTwo, result);
    console.log(division);
}
DividesTwoNumsFactorial(6, 2)