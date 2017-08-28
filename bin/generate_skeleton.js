const path = require('path');
const fs = require('fs');
const slugify = require('slugify');

const generateSlug = (name) => {
    return slugify(name, {
        replacement: '_',    // replace spaces with replacement 
        lower: true          // result in lower case 
    });
}
const ensureDirectoryExistence = (filePath) => {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}
const name = generateSlug(process.argv.slice(2).pop())
const baseQuizPath = `quiz${path.sep}${name}`;
const quizPathFolder = `${baseQuizPath}${path.sep}`;
const fullIndexName = `${quizPathFolder}index.js`
const fullReadmeName = `${quizPathFolder}readme.md`
const fullTestIndex = `test${path.sep}${quizPathFolder}index.test.js`
const indexPattern = `
const fnName = () => {
}

module.exports = fnName;

`;

const testPattern = `
const Test = require('chai').assert;

const fnName = require('..${path.sep}..${path.sep}..${path.sep}${baseQuizPath}');

describe('${name}', () => {
    it('${name}_1', function () {
        Test.equal(1,1);
    });
});

`;

ensureDirectoryExistence(fullIndexName);
ensureDirectoryExistence(fullTestIndex);
fs.writeFileSync(fullIndexName, indexPattern);
fs.writeFileSync(fullReadmeName, '');
fs.writeFileSync(fullTestIndex, testPattern); 