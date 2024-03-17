const { Router } = require('express');
const uploadMiddleware = require('../middlewares/MulterMiddleware');
const UploadModels = require('../models/UploadModels');
const router = Router();

router.get("/api/get", async (req, res) => {
    try {
        const allPhotos = await UploadModels.find().sort({ createdAt: 'descending' });
        res.send(allPhotos);
    } catch (error) {
        console.error("Error fetching photos:", error);
        res.status(500).send("Error fetching photos");
    }
});
router.post("/api/save", uploadMiddleware.single("photo"), async (req, res) => {
    try {
        const photo = req.file.filename;
        const newUpload = new UploadModels({ photo });
        await newUpload.save(); // Use await with save() method
        console.log("Data saved successfully");
        console.log(newUpload);
        res.send(newUpload);
    } catch (error) {
        console.error("Error saving photo:", error);
        res.status(500).send("Error saving photo");
    }
});


module.exports = router;
