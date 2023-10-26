function roadRadarLimits(speed, area){
    let differenceSpeed = 0;
    let status = '';
    let speedLimit=0;
    if (area === 'motorway') { speedLimit=130;}
    else if (area === 'interstate') {speedLimit=90;}
    else if (area === 'city') {speedLimit=50;}
    else if (area === 'residential') {speedLimit=20;}

    if(area === 'motorway' && speed > speedLimit){
        differenceSpeed = speed - speedLimit;
        
    }
    else if(area === 'interstate' && speed >speedLimit){
        differenceSpeed = speed - speedLimit;
        
    }
    else if(area === 'city' && speed > speedLimit){
        differenceSpeed = speed - speedLimit;
        
    }
    else if(area === 'residential' && speed > speedLimit){
        differenceSpeed = speed - speedLimit;
        
    }
    else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        return;
    }

    if(differenceSpeed<=20){ status='speeding';}
    else if(differenceSpeed<=40){status='excessive speeding';}
    else{ status='reckless driving';}


    console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
}
