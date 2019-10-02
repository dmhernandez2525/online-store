const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID
} = graphql;
const mongoose = require("mongoose");
const UserType = require("./types/user_type");
const User = mongoose.model("user");
const CategoryType = require("./types/category_type");
const Category = mongoose.model("category");
const ProductType = require("./types/product_type");
// const updateProductCategory = require("../models/Product").updateProductCategory
const Product = mongoose.model("product");
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        newCategory: {

            type: CategoryType,
            args: {
                name: {type: GraphQLString},
                product: {type: GraphQLID}
            },
            resolve(parentValue, {  name }) {
                const newCategory =  new Category({name})
                newCategory.products.push(product)
                newCategory.save()
            }
        },
        deleteCategory: {

            type: CategoryType,
            args: {
                _id: {
                    type: GraphQLID
                }
            },
            resolve(parentValue, { _id } ){
                return Category.remove({_id})
            }
        },
        newProduct: {

            type: ProductType,
            args: {
                name: {type: GraphQLString},
                description: {type: GraphQLString},
                weight: {type: GraphQLInt},
                category: {type: GraphQLID}
            },
            resolve(parentValue, {name, description, weight}){
                return new Product({
                    name,
                    description,
                    weight,
                    category
                }).save()
            }
        },
        deleteProduct: {

            type: ProductType,
            args: {
                _id: {type: GraphQLID}
            },
            resolve(parentValue, {_id}){
                return Product.remove({_id})
            }
        },
        updateProductCategory:{
            type: ProductType,
            args: {
                productId: {type: GraphQLID},
                categoryId: {type: GraphQLID}
            },
            resolve(parentValue, {productId,categoryId}){
                console.log(Product)
                // return updateProductCategory({
                return Product.updateProductCategory(
                    productId,
                    categoryId
                )
            }

        }
    }
});

module.exports = mutation;