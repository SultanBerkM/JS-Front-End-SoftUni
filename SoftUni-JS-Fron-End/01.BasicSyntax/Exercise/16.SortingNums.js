function sort(arr){
   
    let length = arr.length;
    let newArr = [];

    while(arr.length !== 0){

        newArr.push(Math.min(...arr));
        const indexOne = arr.indexOf(Math.min(...arr));
        arr.splice(indexOne, 1);

        newArr.push(Math.max(...arr));
        const indexTwo = arr.indexOf(Math.max(...arr));
        arr.splice(indexTwo, 1);

    }
    if(length%2!=0){
        newArr.pop();
    }
    return newArr;
}
sort([1, 65, 3, 52, 48, 63, 31, -3, 18] );