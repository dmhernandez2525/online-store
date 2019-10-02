const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: "product"
    }],
    name: {
        type: String,
        required: true
    }
});

CategorySchema.statics.allProducts = (id) => {
    const Category = mongoose.model("category");
    return Category.findById(id).populate("products").then(category => {
        console.log(category)
        return category.products
    })
}

module.exports = mongoose.model("category", CategorySchema);