var fs = require('fs');

const readTextFile = (filename, encoding='utf8') => {
    return fs.readFileSync(filename, encoding)
}

module.exports = {
    readTextFile: readTextFile
}
