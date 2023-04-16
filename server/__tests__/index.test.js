const mongoose = require('mongoose');

const DB_NAME = 'mern-tdd-testing';
const CONNECTION_URL = `mongodb://localhost/${DB_NAME}`;

async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName]
      await collection.deleteMany()
    }
  }

// beforeAll(async () => {
//     await mongoose.connect(CONNECTION_URL)
// })

// afterAll(async () => {
//     await removeAllCollections(mongoose.connection.collections)
//     await mongoose.connection.close()
// })

describe('Testing the test module', () => {

    test('Basic function test', () => {
        const a = 1
        expect(a).toBe(1);
    })

})

