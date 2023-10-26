function printEveryNthElement(arr, n){
    let solve=[];
    for (let i = 0; i < arr.length; i+=n) {
        solve.push(arr[i])
        
    }
    
    return solve;
        
    
}
printEveryNthElement(['5',
'20',
'31',
'4',
'20'],
2
)

