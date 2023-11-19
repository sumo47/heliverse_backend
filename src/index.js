const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/route')

mongoose.connect("mongodb+srv://sumit:sumit@cluster0.8dflsuw.mongodb.net/heliverse")
    .then(() => { console.log("Mongodb conncected sucessfully") })
    .catch((err) => { console.log(err.message) })

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use("/", routes)

port = process.env.PORT || 5000


app.listen(port, () => { console.log(`server is running on port ${port}`) })

