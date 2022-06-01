const connection = require('../connection');

module.exports = async (file) => (await connection())
    .collection('files')
    .insertOne(file);