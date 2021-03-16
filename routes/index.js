const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {

  res.render('pages/index.ejs')
  
})

router.get('/login', function (req, res) {

  res.render('pages/login.ejs')

})

router.get('/register', function (req, res) {

  res.render('pages/register.ejs')

})

module.exports = router



//  ***************************************************** COMMENTS  *******************************************************************
//
//  ***********************************************************************************************************************************

//  *****************************************************  NOTES  *********************************************************************
//
//  1.  Using .ejs extensions even though it is unecessary, but it indicates that those are files being passed to the res.render object
//
//  ***********************************************************************************************************************************