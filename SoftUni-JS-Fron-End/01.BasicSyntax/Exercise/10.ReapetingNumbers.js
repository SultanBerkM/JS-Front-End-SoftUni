function repatingNumbers(num){
    let bool = true;
    let arr = [];
    arr = num.toString();
    for (let index = 0; index < arr.length - 1; index++) {
       if (arr[index] !== arr[index+1]) {
            bool = false;
            break;
       }
    }
    if(bool){
        console.log('true');
    }
    else{
        console.log('false');
    }
    var intArr = arr.split('').map(Number);
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log(intArr.reduce(reducer));
}

repatingNumbers(2341);