const palindromes = function (string) {
    const nonAlphanumChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    let strippedArray = [...string.toLowerCase()]
                            .filter(char => !nonAlphanumChars.includes(char))
        
    let cleanedString = strippedArray.join('');

    let reversedString = strippedArray
                            .reverse()
                            .join('')

    console.log(cleanedString, reversedString);
    
    return reversedString == cleanedString // (? true : false) unneeded as the equality check either returns true or false

};

// Do not edit below this line
module.exports = palindromes;



