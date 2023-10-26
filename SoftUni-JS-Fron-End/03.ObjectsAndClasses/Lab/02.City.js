function printObjProps(obj){
   
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
printObjProps({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })