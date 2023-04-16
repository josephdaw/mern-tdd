const mongoose = require('mongoose');
const { removeAllCollections } = require('../testHelperFunctions')

const DB_NAME = 'mern-tdd-testing';
const CONNECTION_URL = `mongodb://localhost/${DB_NAME}`;


// beforeAll(async () => {
//     await mongoose.connect(CONNECTION_URL)
// })
describe('Testing the test module', () => {

    test('Basic function test', () => {
        const a = 1
        expect(a).toBe(1);
    })

})

// afterAll(async () => {
//     await removeAllCollections(mongoose.connection.collections)
// })