import mongoose from "mongoose";
import { app } from "./app.js"

const CONNECTION_URL = process.env.MONGODB_URI || 'mongodb://localhost/mern-tdd';
const PORT = process.env.PORT || 5000;



export default async function startServer() {
    try {
      await mongoose.connect(CONNECTION_URL);
      app.listen(PORT, 
        () => console.log(`Server running on port ${PORT}`));
        
    } catch (error) {
      console.error(error.message);
    }
  }