const mongoose = require('mongoose');
const connect = async () => {
    try {
        await mongoose.connect(
            process.env.MongoURI,{
            useNewUrlParser: true,
        });
        console.log('MongoDB Connection made!');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connect;