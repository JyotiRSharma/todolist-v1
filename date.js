module.exports.getDate = getDate;
module.exports.getDay = getDay;
module.exports.getDayHindi = getDayHindi;
module.exports.getDayOdia = getDayOdia;

function getDate() {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: '2-digit'
    };
    return today.toLocaleString("en-US", options);
}

function getDay() {
    let today = new Date();
    let options = {
        weekday: 'long',
    };
    return today.toLocaleString("en-US", options);
}

function getDayHindi() {
    let today = new Date();
    let options = {
        weekday: 'long',
    };
    return today.toLocaleString("hi-IN", options);
}

function getDayOdia() {
    let today = new Date();
    let options = {
        weekday: 'long',
    };
    return today.toLocaleString("or-IN", options);
}