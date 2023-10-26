function fruitCalculator(fruitType, grams, pricePerKg){
    const kilograms = grams/1000;
    const result = kilograms * pricePerKg;
    console.log(`I need $${result.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitType}.`);
}
fruitCalculator('apple', 1563, 2.35);