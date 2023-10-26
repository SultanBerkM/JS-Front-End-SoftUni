    function printPersonPhoneNumber(arrPhones){
        let assocArr = {};
    for (const line of arrPhones) {
        let txt = line.split(' ');
        let name = txt[0];
        let number = txt[1];
        assocArr[name] = number;
    }

    let keyInArr = Object.keys(assocArr)
    for (let key of keyInArr) {
        console.log(`${key} -> ${assocArr[key]}`)
    }
    }

printPersonPhoneNumber(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])