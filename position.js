const positions = [];

const savePosition = (position) => {
    console.log(position);
    positions.push(JSON.stringify(position));
}

const handleError = (error) => {
    console.warn('ERROR(' + error.code + '): ' + error.message);
}

const options = {
    enableHighAccuracy: true,
};

navigator.geolocation.watchPosition(savePosition, handleError, options);