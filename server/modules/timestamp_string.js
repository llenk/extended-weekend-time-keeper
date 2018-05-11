function timeStampArray(date) {
    let timeArray = [];
    timeArray.push(date.getFullYear());
    timeArray.push(date.getMonth() + 1);
    timeArray.push(date.getDate());
    timeArray.push(date.getHours());
    timeArray.push(date.getMinutes());
    return timeArray;
}

module.exports = timeStampArray;