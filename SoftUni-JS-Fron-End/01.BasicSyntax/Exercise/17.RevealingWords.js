function replacingFunction(searchingWords, text){
    const replaceWords = Array.from(searchingWords.split(', '));
    const textArr = Array.from(text.split(' '));
    
    for (let i = 0; i < replaceWords.length; i++) {
       for (let j = 0; j < textArr.length; j++) {
        if(textArr[j].length === replaceWords[i].length && textArr[j] === '*'.repeat(textArr[j].length) ){
            text = text.replace(textArr[j], replaceWords[i]);
        }
       }
        
    }
    console.log(text);
}
replacingFunction('great, learning', 'softuni is ***** place for ******** new programming languages')