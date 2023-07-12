import mongoose from 'mongoose';

export default async function connectDB() {
    if (mongoose.connections[0].readyState) return;
    mongoose.set('strictQuery', false);
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error('MONGO_URI environment variable is not defined');
    }
    await mongoose.connect(uri);
    console.log('connected to DB');
}