import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

// connectDB().then(() => {
//     try{
//         app.on("error",(error) => {
//             console.log("ERR:",error);
//             throw error
//         })
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`Server is running at port : ${process.env.PORT}`);
//         } )
//     }
//     catch((err) => {
//         console.log("MONGO db connection failed !!! ",err);
//     })
// })
connectDB().then(() => {
    try {
        app.on("error", (error) => {
            console.log("ERR:", error);
            throw error;
        });
        app.listen(process.env.PORT || 9000, () => {
            console.log(`Server is running at port : ${process.env.PORT || 9000}`);
        });
    } catch (err) {
        console.log("MONGO db connection failed !!! ", err);
    }
});