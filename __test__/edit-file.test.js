'use strict';
jest.mock('fs')
let readData = require('../edit-file.js')
describe(' read my module', () => {
    describe('read ', () => {
        it('if there any file or empty ', () => {
            let file = `${__dirname}/data/person.json`;
            return readData.readFileData(file)
                .then(data => expect(data).not.toBeDefined())
                .catch(error => expect(error).toBeDefined());

        })
    });

    it('read file', () => {
        let file = `${__dirname}/data/person.json`;
        return readData.readFileData(file)
            .then(data => expect(data).toBeDefined())
            .catch(error => expect(error).not.toBeDefined());
    });

}) 
