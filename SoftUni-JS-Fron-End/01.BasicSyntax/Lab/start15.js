function censorship(text, word){
    let replacedText = text.replace(word, '*'.repeat(word.length));
    console.log(replacedText);
}
censorship('Find the hidden word', 'hidden')