function cityTaxes(cityName, cityPopulation, cityTreasury){
    let city = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury += Math.trunc(this.population * this.taxRate);
        },
        applyGrowth(percentage){
            this.population+= Math.trunc(this.population * percentage/100);
        },
        applyRecession(percentage){
            this.treasury -= Math.trunc(this.treasury * percentage/100);
        }

    };

    return city
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes
city.applyGrowth(10)
city.applyRecession(10)
console.log(city);

