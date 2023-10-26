function findingTheBiggestNum(...arr){
    let biggestNum = -10000000;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > biggestNum){
            biggestNum = arr[i];
        }
    }
    console.log(biggestNum);
}
findingTheBiggestNum(-43, -12, -123)