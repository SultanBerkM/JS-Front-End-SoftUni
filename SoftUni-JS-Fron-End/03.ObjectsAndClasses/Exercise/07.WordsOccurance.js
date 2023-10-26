function solve(text){
    const obj = {};
    text.split(' ').forEach((line) => {
        line = line.toLowerCase();
        if(obj.hasOwnProperty(line)){
            obj[line]++;
        }
        else{
            obj[line]=1;
        }
    });
    let result = Object.keys(obj).map((key) => {
        return obj[key] % 2 !== 0 ? key : null;
    }).filter((x) => x !== null);
    
    console.log(result.join(" ").toString())
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')