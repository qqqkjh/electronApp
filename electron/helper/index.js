
const readFileList = require('./fileReader.js');
const generateClassFile = require('./generateClassFile.js');

module.exports = {
    ...readFileList
    ,...generateClassFile
}