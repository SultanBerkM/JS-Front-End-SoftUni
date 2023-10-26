function isNumberPalindrome(numberArr){

    let resultPalindrome = (number) => returnNumBackwards(number) === number;

    function returnNumBackwards(currentNum){
        let strNum = currentNum.toString();
        let backwardsNum = '';
        for (let i = strNum.length - 1; i >= 0; i--) {
            backwardsNum += strNum[i];
        }
        return Number(backwardsNum);
    }

    for (let index = 0; index < numberArr.length; index++) {
        if(resultPalindrome(numberArr[index])){console.log('true'); }
        else{ console.log('false'); }
    }
   
}

isNumberPalindrome([32,2,232,1010]);