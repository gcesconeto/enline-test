const filesModel = require('../models/fileUpload');

module.exports = async (req, res, next) => {
    try {
        const now = new Date();
        const date = now.toISOString();
        const { path, originalname, mimetype, size } = req.file;
        const newFile = {
            date,
            path,
            originalname,
            mimetype,
            size,
        };
        await filesModel.create(newFile);
        res.render('../views/fileUploaded.ejs', { newFile });     
    } catch (error) {
        next(error);
    }
};