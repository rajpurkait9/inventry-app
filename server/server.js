const express = require('express');
const cors = require('cors');
const router = require('./routes/user');
const connetDB = require('./db/connect');
const app = express();
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/',router);

// start code of the server
const start = async()=>{
    try {
       await connetDB(process.env.MONGO_URI);
        console.log('DB connected successfully...');
        const port = process.env.PORT || 5000;
        app.listen(port,()=>{
            console.log(`server is running on port${port}....`);
        })
    } catch (error) {
       console.log(error); 
    }
}
start()
