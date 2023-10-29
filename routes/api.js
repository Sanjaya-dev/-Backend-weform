import express from "express";

const router = express.Router();

router.get('/',(req,res) => {
    console.log(req.body);
    res.json({title:`hello world ${req.query.name}, umur ${req.body.umur}`});
})

router.post('/',(req,res) => {
    res.json({title:`hello world ${req.body.orang.name}, umur ${req.body.orang.umur}`});
})

export default router
