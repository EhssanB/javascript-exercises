const fibonacci = function(term) {
    if (term < 0) return "OOPS"
    if (term == 0) return 0
    if (term == 1) return 1

    return fibonacci(term - 1) + fibonacci(term - 2)
};

// Do not edit below this line
module.exports = fibonacci;
