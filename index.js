// Code your solution in this file!

const distanceFromHqInBlocks = (pickupLocation) => {
    if (pickupLocation <= 42){
        return 42 - pickupLocation
    } else {
        return pickupLocation - 42
    }
}

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264
}

const distanceTravelledInFeet = (start, current) => {
    if (start <= current){
        return (current - start) * 264
    } else {
        return (start - current) * 264
    }

}

