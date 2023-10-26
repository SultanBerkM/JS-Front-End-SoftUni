function reverseArray(num, input){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(input[i]);
    }
    let reversedArr = "";
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArray += `${arr[i]} `;
    }

    console.log(reverseArray)
}  
reverseArray(2, [66, 43, 75, 89, 47]);