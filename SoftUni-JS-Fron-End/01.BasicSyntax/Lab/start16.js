function censorship(text, searchedWord){
    let words = text.split(' ');
    let cnt = 0;
    for(let word of words){
        if(word === searchedWord){
            cnt++;
        }
    }
    console.log(cnt);
}
censorship('Find the hidden word', 'hidden')