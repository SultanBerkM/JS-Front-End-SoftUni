function restokingMarket(currentStock, newStock){
    stockObj = {};
    function takesStockInfo(stocksArr){
        for (let i = 0; i < stocksArr.length; i+=2) {
           if(stockObj.hasOwnProperty(stocksArr[i])){
            let currentHaving = stockObj[stocksArr[i]];
            let newValue = Number(currentHaving) +  Number(stocksArr[i+1])
            stockObj[stocksArr[i]] = newValue.toString();
           }
           else{ 
            stockObj[stocksArr[i]] = stocksArr[i+1];
           }
        }
    }
    takesStockInfo(currentStock);
    takesStockInfo(newStock)

    Object.keys(stockObj).forEach(key => {
        console.log(`${key} -> ${stockObj[key]}`)
    });
}

restokingMarket([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )