function organasingMeetings(array){
    let schedule = {};
    for (const line of array) {
        let [weekday, name] = line.split(' ');
        if(schedule.hasOwnPoperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        }
        else{
            schedule[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (const key in schedule) {
       console.log(`${key} -> ${schedule[key]}`);
    }

}