
const dotenv = require('dotenv');
dotenv.config();

// here we are exporting all the env varible that the project uses
module.exports = {
    PORT:process.env.PORT,
    DB_URL:process.env.DB_URL
}

// hum ne ek nya folder bnay h config kykuki hum sari config file ko mange kr ske
// single resposibilty principal 