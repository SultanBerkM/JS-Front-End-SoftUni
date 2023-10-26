function arrRotstionByNum(arr, num){
    for (let i = 0; i < num; i++) {
       arr.push(arr.shift());
        
    }
    console.log(arr.join(' '))
}
arrRotstionByNum([2, 4, 15, 31], 5 );