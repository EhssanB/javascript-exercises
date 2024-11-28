const repeatString = function(string, num) {
    let repeatedString = string;

    if (num == 0) return "";
    if (num < 0) return 'ERROR';

    for (let i = num - 1; i--; i > 0) {
        repeatedString += string;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
