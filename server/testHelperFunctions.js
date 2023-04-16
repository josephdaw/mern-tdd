async function removeAllCollections (collections) {
    for (const collectionName of collections) {
      const collection = collections[collectionName]
      await collection.deleteMany()
    }
  }

//   ORIGINAL EXAMPLE
//   async function removeAllCollections () {
//     const collections = Object.keys(mongoose.connection.collections)
//     for (const collectionName of collections) {
//       const collection = mongoose.connection.collections[collectionName]
//       await collection.deleteMany()
//     }
//   }

module.exports = { removeAllCollections };