function printsOnlyGivenMusicGender(input){

    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    
    let playlist =[];
    let songsCount = input.shift();
    let allSongs = [];
    let type = input.pop();

    for (let i = 0; i < songsCount; i++) {
        allSongs.push(input[i]);
        let [currentType, currentName, currentTime] = input[i].split('_');
        let song = new Song(currentType, currentName, currentTime);
        playlist.push(song);
    }
    if(type === 'all'){
        for (const line of playlist) {
            console.log(line.name);
        }    
    }
    else{
        for (const line of playlist) {
            if(type === line.typeList){
                console.log(line.name);
            }
        }
    }
}
printsOnlyGivenMusicGender([3,
    'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']

    
    )