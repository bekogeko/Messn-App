require("dotenv").config();
require("colors")

// Defining defaults for env variables
const port = process.env.PORT || 3000;

const express = require('express')
const app = express()

// Accept application/json requests 
app.use(express.json())
// Accept x-form-urlencoded requests
app.use(express.urlencoded({extended: true}))

// set static folder as 'public' folder
app.use(express.static('public'))

// Set view engine as ejs
app.set('view engine', 'ejs')


// Render index view without parameter
app.get('/', (req, res) => {
    res.render("index")
})


// App starts on defined port variable in .env file or 3000 port
app.listen(port,()=>{
    console.log('Listening on '+('http://localhost:'+ port).blue)
})