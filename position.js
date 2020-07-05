const positions = [];

let distance = 0;

const savePosition = (position) => {
    positions.push(position);
    document.getElementById('txt').value = JSON.stringify(positions, null, ' ');
    document.getElementById("p1").innerHTML = positions.length;
}

const handleError = (error) => {
    console.warn('ERROR(' + error.code + '): ' + error.message);
}

const options = {
    enableHighAccuracy: true,
};

navigator.geolocation.watchPosition(savePosition, handleError, options);