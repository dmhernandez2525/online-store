const mongoose = require("mongoose")
const graphql = require("graphql")
const {
        GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLID
} = graphql;
  const Category = mongoose.model("category");
const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        category: {
            type: require("./category_type"),
            resolve(parentValue){
                return Category.findById(parentValue.category)
            }
        },
        description:{
            type: GraphQLString
        },
        weight: {
            type: GraphQLInt
        }

    })
})
module.exports = ProductType;