function solve(inputArray){
    const heroList = [];
    class Hero{
        constructor(heroName, lvl, powers){
            this.heroName = heroName;
            this.lvl = lvl;
            this.powers = powers;
        }
    }
    inputArray.forEach(line => {
        let [hero, level, items] = line.split(' / ');
        let champion = new Hero(hero, level, items);
        heroList.push(champion);
    });
    heroList.sort((a,b) => a.lvl - b.lvl).forEach(champ =>{
        console.log(`Hero: ${champ.heroName}`);
        console.log(`level => ${champ.lvl}`);
        console.log(`items => ${champ.powers}`);
    })
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);