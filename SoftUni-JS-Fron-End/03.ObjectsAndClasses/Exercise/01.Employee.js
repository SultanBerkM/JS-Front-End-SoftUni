function printEmployeesNumber(input){
    let workers = {};
    input.forEach(element => {
        workers[element] = element.length;
    });
    
    for (const key in workers) {
       console.log(`Name: ${key} -- Personal Number: ${workers[key]}`)
    }
}

printEmployeesNumber(
    ['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']
)