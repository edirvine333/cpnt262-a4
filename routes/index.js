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

//  **************************************************   ATTRIBUTIONS  ****************************************************************
//
//  - Stackoverflow which lead me to notice the missing "module.export = router" on the bottom of my index.js routing module =>
//  - https://stackoverflow.com/questions/27465850/typeerror-router-use-requires-middleware-function-but-got-a-object/28379965#28379965
//
//  - Sample Code Activity => https://github.com/sait-wbdv/sample-code/tree/master/backend/express
//
//  -  Express Docs - res.render() => http://expressjs.com/en/api.html#res.render
//  
//  ***********************************************************************************************************************************