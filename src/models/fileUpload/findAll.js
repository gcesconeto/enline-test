const connection = require('../connection');

module.exports = async () => {
    const fileList = await (await connection())
    .collection('files')
    .find().toArray();
    return fileList;
};