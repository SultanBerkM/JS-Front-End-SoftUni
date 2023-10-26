function sortingOperation(names){
    names.sort();
    for (let index = 0; index < names.length; index++) {
        console.log(`${index+1}.${names[index]}`)
        
    }
}
sortingOperation([1,
2,
3,
4]);