const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://hk810773:khalidhussain@cluster0.rmxzppe.mongodb.net/iNotebook" 
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;