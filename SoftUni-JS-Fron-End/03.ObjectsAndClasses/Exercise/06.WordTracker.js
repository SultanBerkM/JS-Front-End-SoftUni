function wordTracker(text){
    const mainWords = {};
    const words = text.shift().split(' ');
    for (const word of words) {
        mainWords[word] = 0;
    }

    text.forEach(w => {
        Object.keys(mainWords).forEach(t => {
            if(w === t){
                mainWords[t]++;
            }
        })
    });
    let sortedWords = Object.entries(mainWords).sort((a,b) =>{ let [nameA, countA] = a; let[nameB, countB] = b; return countB - countA})
    for (const a of sortedWords) {
        
        console.log(`${a[0]} - ${a[1]}`)
    }
}

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'])
    