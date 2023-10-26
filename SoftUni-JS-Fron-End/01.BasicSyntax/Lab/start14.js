function operation(text, index1, substringCount){
    let result = text.substring(index1, substringCount + index1);
    console.log(result);
}
operation('SkipWord', 0, 4);