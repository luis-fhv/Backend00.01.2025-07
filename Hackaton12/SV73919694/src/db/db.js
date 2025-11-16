import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/codigo_alumno_demo';
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  console.log('✅ Conectado a MongoDB:', uri);
  return mongoose;
}

export async function disconnectDB() {
  await mongoose.disconnect();
}
