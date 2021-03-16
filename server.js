//  Load builtin modules
const path = require('path')

//  Load npm modules
// const express = require('express')
// const dotenv = require('dotenv').config()
// const cors = require('cors')

//  Load custom modules
const route = require('./routes/api/v0.js')

//  Assign the express() function
const app = express()

//  *************************************  MIDDLEWARE  ******************************************
app.use(cors())

//  Serves the static pages
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', route)

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

