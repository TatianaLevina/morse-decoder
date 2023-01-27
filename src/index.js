const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let mapDecode = new Map();

    for (let morsecode in MORSE_TABLE) {
        let binarycode = '';
        for (let i = 0; i < morsecode.length; i++) {
            if (morsecode[i] === '.') {
                binarycode += '10';
            } else {
                binarycode += '11';
            }
        }
        mapDecode.set(binarycode.padStart(10, '0'), MORSE_TABLE[morsecode]);
    }
    mapDecode.set('**********', ' ');

    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        result += mapDecode.get(expr.substring(i, i + 10));
    }
    return result;
}

module.exports = {
    decode
}