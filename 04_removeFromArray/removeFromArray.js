const removeFromArray = function(array, ...elements) {
    // iterate through each element in the array
    // check whether its in ...elements
        // if it is remove from array
        // else continue to next element in array
    // return reduced array

    let removedArray = [];

    return array.reduce((currentArray, currentElement) => {
        
        if (elements.includes(currentElement)) return currentArray
        
        return currentArray.concat(currentElement);
        
    },[])
};

// Do not edit below this line
module.exports = removeFromArray;
