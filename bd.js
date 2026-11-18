const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect(
            process.env.MONGODB_URI, {
                dbName:process.env.DB_NAME,
                useNewUrlParser: true,
                useUnifiedTopology: true,
         });
         console.log('Connected to MOngoDB');
    }catch (error){
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = (connect);