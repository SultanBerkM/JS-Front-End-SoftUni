function DisplaysNimbersWithStartAndEndThenSums(start, end){
    const arr=[];
    let sum = 0;
    for (let i = start; i <= end; i++) {
        arr.push(i);
        sum+=i;
    }
    console.log(arr.join(' '));
    console.log('Sum: ' + sum);
    
}
DisplaysNimbersWithStartAndEndThenSums(0, 26);