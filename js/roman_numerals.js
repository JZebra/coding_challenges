// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.


var NumeralMap = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}

var DigitMap = {
    0: '',
    1: 's',
    2: 'ss',
    3: 'sss',
    4: 'sm',
    5: 'm',
    6: 'ms',
    7: 'mss',
    8: 'msss',
    9: 'sl',
}

function convertToRoman(num) {
    // map digits to numeral combination
    // replace placeholders with correct numerals
    // redo for each digit
    var output = '';
    if (num > 9999) {
        return Error
    }
    var order = [1000, 100, 10, 1]
    order.forEach(place => {
        output += convertDigit(num, place)
    })
    return output;
}

// converts a single digit into roman numeral.
// num: whole number (eg, 4883)
// place: the digit to convert (eg, 100)
// returns a string eg 'DCCC'
function convertDigit(num, place) {
    const numeralKeys = [1, 5, 10]
    var digitVal = Math.floor(num % (place * 10) / place)
    var digitStr = DigitMap[digitVal]
    var numKeys = numeralKeys.map(key => key * place)
    var smKey = NumeralMap[numKeys[0]]
    var mdKey = NumeralMap[numKeys[1]]
    var lgKey = NumeralMap[numKeys[2]]
    return digitStr.replace(/s/g, smKey).replace(/m/g, mdKey).replace(/l/g, lgKey)
}
