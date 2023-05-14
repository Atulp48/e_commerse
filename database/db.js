import mongoose from 'mongoose';


const Connection = async (USERNAME,PASSWORD) => {
 
    mongoose.set('strictQuery', true);
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-anbmlb3-shard-00-00.vzfc2sq.mongodb.net:27017,ac-anbmlb3-shard-00-01.vzfc2sq.mongodb.net:27017,ac-anbmlb3-shard-00-02.vzfc2sq.mongodb.net:27017/?ssl=true&replicaSet=atlas-fsi7ew-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;