const {faker} = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;

async function main(){
    const url = "mongodb+srv://kenneth:E9zb3q3340@cluster0.jznelf8.mongodb.net"
    const client = new MongoClient(url);

    try{
        await client.connect();

        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");

        productsCollection.drop();
    }catch{
        
    }
}