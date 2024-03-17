const mongoose = require('mongoose');
const uploadSchema = new mongoose.Schema(
    {
        photo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true // Set timestamps option directly in the schema object
    }
);

module.exports = mongoose.model('Upload', uploadSchema);
