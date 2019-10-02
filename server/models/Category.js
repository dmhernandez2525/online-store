const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    Products: [{
        type: Schema.Types.ObjectId,
        ref: "products"
    }],
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("category", CategorySchema);