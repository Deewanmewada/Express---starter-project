const express = require('express');

const bodyparser = require('body-parser');


// const PORT = process.env.PORT; //Environment Port

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');

const app = express();

app.use(bodyparser.json()); //midlware for json
app.use(bodyparser.text())
app.use(bodyparser.urlencoded())

app.post('/ping', (req,res) => {
    console.log(req.body)
    return res.json({message:"pong"}) ;
})


app.listen(ServerConfig.PORT , async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...`)

    
   
    
});

