import express from "express";
import apiRouter from "./routes/api.js";

const app = express();

//agar dapat menerima req body
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/",apiRouter);

// menjalankan server port 3000
app.listen(3000,() => {
    console.log("server start on port 3000");
})