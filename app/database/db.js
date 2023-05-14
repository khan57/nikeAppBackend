const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const database = client.db("nikeApp");
const products = database.collection("products");
const orders = database.collection("orders");

module.exports = { products, orders };
