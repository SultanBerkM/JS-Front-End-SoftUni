function printLoadingBar(percent){
    let printBar = (percent) => `${percent}% [${'%'.repeat(percent/10)}${'.'.repeat((100-percent)/10)}]`
    let printBar100 = (percent) => `[${'%'.repeat(percent/10)}${'.'.repeat((100-percent)/10)}]`
    if(percent < 100){
        console.log(printBar(percent));
        console.log('Still loading...')}
    else{
        console.log('100% Complete!');
        console.log(printBar100(percent));
    }
}
printLoadingBar(100);