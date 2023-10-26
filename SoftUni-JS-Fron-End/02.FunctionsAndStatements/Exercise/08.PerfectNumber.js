function checkIsNumberIsPerfect(number){
    let divisibles = [];
    let sumOfDivisibles = 0;
    function sumOfArrElement(arr){
        for (let i = 0; i < arr.length; i++) {
            sumOfDivisibles+=arr[i];
        }
        return sumOfDivisibles;
    }

    for (let index = 1; index < number; index++) {
        if(number % index === 0){
            divisibles.push(index);
        }
    }
    if (sumOfArrElement(divisibles) ===  number) {
        console.log('We have a perfect number!')
    }
    else{
        console.log("It's not so perfect.")
    }
}
checkIsNumberIsPerfect(20);