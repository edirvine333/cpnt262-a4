//  Load builtin modules
const path = require('path')

//  Load npm modules
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

//  Load custom modules
const route1 = require('./routes/api/v0.js')
const route2 = require('./routes/index.js')

//  Assign the express() function
const app = express()

app.set('view engine', 'ejs');

//  *************************************  MIDDLEWARE  ******************************************

app.use(cors())

//  Serves the static page
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', route1)
app.use('/', route2)

//  Error handling
app.use(function (req, res) {
  res.status(404)
  res.sendFile(__dirname +'/public/404.html')
})

//  ********************************************************************************************

const port = process.env.PORT || 3000

//  Listening block
app.listen(port, function () {
  console.log(`Listening on port: ${port}`)
})

//  **************************************************  COMMENTS  *************************************************************
//
//
//  ***************************************************************************************************************************

//  ***************************************************  NOTES  ***************************************************************
//
//  1.  Using .js extension even though it is not necssary for reference so that I know that it is a file path
//
//  ***************************************************************************************************************************
