function printNxNMatrix(number){
    let matrix = '';
    for (let row = 1; row <= number; row++) {
        for (let col = 1; col <= number; col++) {
           matrix+=`${number} `; 
        }
        matrix.trimEnd()
        matrix += "\n";
    }
    
    console.log(matrix);
}
printNxNMatrix(4);