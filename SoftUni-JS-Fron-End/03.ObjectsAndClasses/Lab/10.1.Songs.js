function solve(input){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    const dispalytype = input.pop();
    const [_ ,...songs] = input;

    let result = songs.map((songAsTxt) => {
        const [type, name, time] = songAsTxt.split("_");
        let song = new Song(type, name, time);
        return song;
    }).filter((song) => {
        if(dispalytype === 'all'){
            return song;
        } 
        return dispalytype === song.typeList;
    }).map((song) => song.name).join('\n');
        
    console.log(result)

    
}
solve([3,
    'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']);