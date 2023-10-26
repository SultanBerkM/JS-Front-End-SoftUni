function printGrade(grade){
    if(grade < 3.00){console.log('Fail')}
    else if(grade >= 3.00 && grade < 3.50){console.log('Poor' + formatGrade(grade))}
    else if(grade >= 3.50 && grade < 4.50){console.log('Good' + formatGrade(grade))}
    else if(grade >= 4.50 && grade < 5.50){console.log('Very Good' + formatGrade(grade))}
    else if(grade >= 5.50 && grade < 6.00){console.log('Excellent' + formatGrade(grade))}

    function formatGrade(currentGrade){
        return text = ` (${currentGrade.toFixed(2)})`;
    }
}

printGrade(2.99)