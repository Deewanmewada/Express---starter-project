const express = require('express');

// const PORT = process.env.PORT; //Environment Port

const ServerConfig = require('./config/serverConfig');
const app = express();


app.listen(ServerConfig.PORT , () => {
    console.log(`Server started at port ${ServerConfig.PORT}...`)
    // console.log(`Environment Port: ${process.env.PORT}`);
    
   
    
})


// const express = require('express');
// const dotenv = require('dotenv');

// dotenv.config(); // Load environment variables from .env file

// const PORT = process.env.PORT || 3000; // Use the PORT from .env or fallback to 3000

// const app = express();

// app.listen(PORT, () => {
//     console.log(`Server started at port ${PORT}...`);
//     console.log(`Environment Port: ${process.env.PORT}`);
// });
