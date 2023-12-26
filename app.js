import express from "express";

const app = express();


app.get('/', (request, response) =>{
    response.send("Hello")   
})

app.get('/news', (req, res) =>{
    res.send("")
})

app.get('/dhamaka', (req, res) =>{
    res.send("")
})

app.get('/tiu', (req, res) =>{
    res.send("")
})

app.get('/rajPandey', (req, res) =>{
    res.send("")
});

app.listen(5500, () => {
    console.log("http://localhost:5500")
});
