function solve(input){
    let obj ={}
    for (let i = 0; i < input.length; i++) {
        let [command, number] = input[i].split(', ');
        if(command === 'IN'){
            obj[number] = null;
        }
        else if(command === 'OUT'){
            delete  obj[number];
        }
    }
    let result = Object.keys(obj).sort();
    result.length === 0 ? console.log("Parking Lot is Empty") : result.forEach((e) => { console.log(e)});
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)