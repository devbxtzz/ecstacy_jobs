const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');




// import routes
const authRoutes = require('./routes/authRoutes');

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//database connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB connection successful!!"))
    .catch((err) => console.log(err));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());


//ROUTES MIDDLEWARE
app.use('/api', authRoutes);

// error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 8001

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});