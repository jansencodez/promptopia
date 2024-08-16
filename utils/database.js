import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = mongoose.connection.readyState === 1;

    if (isConnected) {
      console.log('MongoDB connection established');
    } else {
      console.log('Failed to establish MongoDB connection');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
