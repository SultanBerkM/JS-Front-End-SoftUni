function storesInformationAdress(arrayOfStr){
    let adressBook = {};
    for (const line of arrayOfStr) {
        let [key, value] = line.split(':');
        adressBook[key] = value;
    }

    for (const key in sortadressBook) {
       console.log(`${key} -> ${adressBook[key]}`);
    }
}
storesInformationAdress(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])