const fs = require('fs-extra');
const filesModel = require('../models/fileUpload');

module.exports = async (req, res, next) => {
    try {
        await filesModel.wipe();
        await fs.emptyDir('uploads');
        res.render('../views/DBWipe.ejs');     
    } catch (error) {
        next(error);
    }
};