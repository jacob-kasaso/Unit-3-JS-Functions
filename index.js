// Code your solution in this file!
function distanceFromHqInBlocks(someMile){
    return someMile - 42;
}

function distanceFromHqInBlocks(blocks){
    const distance = Math.abs(blocks - 42)
    return distance;
}

function distanceFromHqInFeet(someMile){
    return distanceFromHqInBlocks(someMile) * 264;
}  
function distanceTravelledInFeet(start, destination){
    const distance = Math.abs(destination - start) * 264;
    return distance;
}  

function calculatesFarePrice(start , destination){
    const distance = Math.abs(destination - start) * 264;
    if(distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500){
        return 25;
    }else {
        return 'cannot travel that far'
    }
}





