function promotions(day, age){
    let price;
    if(age < 0){
        price='Error';
    }
    if(day === 'Weekday'){
        if(age >= 0 && age <= 18){ price = '12$';}
        if(age >18 && age <= 64){ price = '18$';}
        if(age > 64 && age <= 122){ price = '12$';}
    }
    else if(day === 'Weekend'){
        if(age >= 0 && age <= 18){ price = '15$';}
        if(age >18 && age <= 64){ price = '20$';}
        if(age > 64 && age <= 122){ price = '15$';}
    }
    else if(day === 'Holiday'){
        if(age >= 0 && age <= 18){ price = '5$';}
        if(age >18 && age <= 64){ price = '12$';}
        if(age > 64 && age <= 122){ price = '10$';}
    }
    console.log(price);
}
promotions('Holiday', 15);