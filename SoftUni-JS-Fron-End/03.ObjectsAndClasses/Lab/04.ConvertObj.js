function converJSONToObj(jsonFormat){
    const obj = JSON.parse(jsonFormat);
    const entries = Object.entries(obj);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`)
    }
}

converJSONToObj('{"name": "George", "age": 40, "town": "Sofia"}')