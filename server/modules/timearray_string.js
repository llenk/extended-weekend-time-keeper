function timeArrayString(timeArray) {
    let timeString = '' + timeArray[0] + '-' + timeArray[1] + '-' + timeArray[2]
        + ' ' + timeArray[3] + ':' + timeArray[4] + ':00';
    return timeString;
}

module.exports = timeArrayString;