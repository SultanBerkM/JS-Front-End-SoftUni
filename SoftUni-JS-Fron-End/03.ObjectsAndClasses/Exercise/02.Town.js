function createObjFromStr(input){
    let townObj = {};
    const arrOfObj = [];
    input.forEach((element) =>{
        let arr = element.split(' | ');
        townObj = {town: arr[0], latitude: Number(arr[1]).toFixed(2), longitude: Number(arr[2]).toFixed(2) }
        arrOfObj.push(townObj);
        
    })

    arrOfObj.forEach((x) => console.log(x));
  
}

createObjFromStr(
['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])