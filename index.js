import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
    origin: "http://localhost:5173",
    credentials: true,
}
app.use(cors(corsOption));



const PORT = process.env.PORT || 3000;

//api's-->
app.use("/api/v1/user", userRoute);


app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})