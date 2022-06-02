const filesModel = require('../models/fileUpload');

module.exports = async (_req, res, next) => {
    try {
        const fileList = await filesModel.findAll();
        res.render('../views/fileForm.ejs', { fileList });     
    } catch (error) {
        next(error);
    }
};