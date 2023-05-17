import app from './app';
import * as dotenv from 'dotenv';
import connectDB from './config/db';
import path from 'path';

dotenv.config({path: './config/config.env'});

const PORT: number = 5000

connectDB();

const server = app.listen(PORT,()=> console.log(`Server runnign in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err}`);
  server.close(() => process.exit(1));
});
