const filesModel = require('../models/fileUpload');

module.exports = async (_req, res) => {
    const fileList = await filesModel.findAll();
    res.render('../views/fileUpload.ejs', { fileList });
};