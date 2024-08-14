import express from "express";
import {config} from "dotenv";
import cors from "cors";
import { sendMail } from "./utils/sendEmail.js";


const app=express();
const router=express.Router();

config({path: "./config.env"});


app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

router.post("/send/mail", async(req,res,next)=>{
    const {name, email, message} = req.body;
    if(!name || !email || !message){

        return next(res.status(400).json({
            success: false,
            message: "Please provide all details"
        }))
    }
    try{
        await sendMail({
            email: "sanjeedofficial22@gmail.com",
            subject: "GYM WEBSITE CONATCT",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "message sent successfully."
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal server error."
        })
    }
})

router.get("/",(req,res,next)=>{
    res.json({success: true,
        message: "HABIBI COME TO DUBAI"})
});

app.use(router)

app.listen(process.env.PORT, ()=>{
    console.log(`server listening at port ${process.env.PORT}`);
})