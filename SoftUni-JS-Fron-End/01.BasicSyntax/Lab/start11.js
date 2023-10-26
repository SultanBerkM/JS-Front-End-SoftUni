function SumFristAndLastElementOfArr(arr){
    const firstIndex = arr[0];
    const secondIndex = arr[arr.length - 1];
    const sum = firstIndex + secondIndex; 
    console.log(sum);
}
SumFristAndLastElementOfArr([11, 30, 69]);