const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');



//database connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB!!!'))
    .catch((err) => console.log(err));


//port
const port = process.env.PORT || 8001

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});