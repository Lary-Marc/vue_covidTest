//Dependecies
const express = require('express'); 

const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


//instatiate the express library and assign it to var app
const app = express(); //(2. instatiations)
const port = process.env.PORT || 3800;


//mongodb connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
.then(()=> console.log("Connected to the database!"))
.catch((err) => console.log(err));


// (4. middleware)
//body-parser handles reading data from the form element

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())


  //routes
  app.use("/api/test", require("./routes/testRoutes"));


  // this helps create a server defining the port, console.log will run whenever you listen to the port
   app.listen(port, () =>{
      console.log(`listening on http://localhost:${port}`)
    })