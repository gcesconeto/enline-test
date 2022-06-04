const connection = require('../connection');

module.exports = async (files) => (await connection())
    .collection('files')
    .insertMany(files);
