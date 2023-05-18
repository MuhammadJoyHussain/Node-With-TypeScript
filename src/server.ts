import app from './app';
import connectDB from './config/db';

const PORT = process.env.PORT || 5000;

connectDB();

const server = app.listen(PORT,()=> console.log(`Server runnign in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err}`);
  server.close(() => process.exit(1));
});
