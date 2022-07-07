require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// route
app.use('/api/workouts', workoutRoutes);

// connect to DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen to req
        app.listen(process.env.PORT, () => {
            console.log('connect to DB & server running on port 4000.');
        })
    })
    .catch(err => {
        console.log(err);
    });

