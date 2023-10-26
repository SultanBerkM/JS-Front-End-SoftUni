function createObjAndConverToJSON(name, lastName, hairColor){
    let obj = {
        name,
        lastName,
        hairColor
    };
    
    console.log(JSON.stringify(obj));
}
console.log('George', 'Jones',

'Brown')