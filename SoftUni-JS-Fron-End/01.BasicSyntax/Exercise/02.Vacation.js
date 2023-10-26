function vacationSum(countOfPeople, groupType, weekDay){
    let price = 0;
    let sum = 0;
    if(weekDay === 'Friday'){
        if(groupType === 'Students'){
            price = 8.45;   
        }
        else if(groupType === 'Business'){
            price = 10.90;   
        }
        else if(groupType === 'Regular'){
            price = 15;   
        }
    }
    else if(weekDay === 'Saturday'){
        if(groupType === 'Students'){
            price = 9.80;   
        }
        else if(groupType === 'Business'){
            price = 15.60;   
        }
        else if(groupType === 'Regular'){
            price = 20;   
        }
    }
    else if(weekDay === "Sunday"){
        if(groupType === 'Students'){
            price = 10.46;   
        }
        else if(groupType === 'Business'){
            price = 16;   
        }
        else if(groupType === 'Regular'){
            price = 22.50;   
        }
    }
    
    sum = price * countOfPeople;

    if(groupType === 'Students' && countOfPeople >=30){
        sum = sum - (sum * 0.15);
    }
    else if(groupType === 'Business' && countOfPeople >=100){
        
        sum = price * (countOfPeople - 10);
    }
    else if(groupType === 'Regular' && countOfPeople >=10 && countOfPeople <=20){
        sum = sum - (sum * 0.05);
    }

    console.log('Total price: ' + sum.toFixed(2));
}

