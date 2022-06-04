const filesModel = require('../models/fileUpload');
const fileListProcessor = require('../utils/fileListProcessor');

module.exports = async (req, res, next) => {
    try {
        const { files } = req;
        if (!files[0]) return res.render('../views/fileUploaded.ejs', { fileList: [] });
        const fileList = fileListProcessor(files);
        await filesModel.create(fileList);
        res.render('../views/fileUploaded.ejs', { fileList });     
    } catch (error) {
        next(error);
    }
};