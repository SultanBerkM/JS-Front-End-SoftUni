function calcOrderSum(product, count){
    let outputPrice = 0;
    switch (product) {
        case 'coffee':  outputPrice = totalPriceCalc(1.50, count); break;
        case 'water':  outputPrice = totalPriceCalc(1.00, count); break;
        case 'coke':  outputPrice = totalPriceCalc(1.40, count); break;
        case 'snacks':  outputPrice = totalPriceCalc(2.00, count); break;
    }
    
    console.log(outputPrice);

    function totalPriceCalc(price, n){
        return (price * n).toFixed(2);
    }
}

calcOrderSum('coffee', 2);
