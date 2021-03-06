const express = require('express');
const routerApi = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./db/database');
const createRoles = require('./lib/initialSetup');
const dotenv = require('dotenv');

const app = express();
createRoles();

// Settings
const port = process.env.PORT || 3000;
dotenv.config();

// Cors
const whitelist = ['http://localhost:3000','http://localhost:3001']
const options = {
    origin: (origin, callback) => {
        if ( whitelist.includes(origin) || !origin ) {
            callback(null, true)
        } else {
            callback(new Error('No Permitido'))
        }
    }
}

// Database
connectDB();

// Middlewares
app.use(cors(options));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
routerApi(app);

// Server
app.listen(port, () => {
    console.log(`Server on port ${port}`)
})