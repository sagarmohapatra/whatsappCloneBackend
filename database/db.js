import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const Connection = async () => {
    const url = `mongodb+srv://${USERNAME}:${PASSWORD}@message.rbwxxoq.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            
        })
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error.message);
    }
}
export default Connection