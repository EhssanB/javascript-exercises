const findTheOldest = function(array) {
    let currentYear = new Date().getFullYear() 
    
    let findOldest = (oldest, current) => {
        let oldestAge = ('yearOfDeath' in oldest ? oldest.yearOfDeath : currentYear) - oldest.yearOfBirth;
        let currentAge = ('yearOfDeath' in current ? current.yearOfDeath : currentYear) - current.yearOfBirth;

        return currentAge > oldestAge ? current : oldest
    }

    return array.reduce(findOldest);
};

// Do not edit below this line
module.exports = findTheOldest;
