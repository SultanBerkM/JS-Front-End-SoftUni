function mathOperationDependingOnCommand(number, c1, c2, c3, c4, c5){
    number = Number(number);
    let strArr=[];
    strArr.unshift(c5);
    strArr.unshift(c4);
    strArr.unshift(c3);
    strArr.unshift(c2);
    strArr.unshift(c1);

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'chop') {
            number/=2;
        }
        else if (strArr[i] === 'dice') {
            number = Math.sqrt(number);
        }
        else if (strArr[i] === 'spice') {
            number+=1;
        }
        else if (strArr[i] === 'bake') {
            number*=3;
        }
        else if (strArr[i] === 'fillet') {
            number -= number * 0.2;
        }

        console.log(number);
    }

   
}
mathOperationDependingOnCommand('9', 'dice', 'spice', 'chop', 'bake', 'fillet')