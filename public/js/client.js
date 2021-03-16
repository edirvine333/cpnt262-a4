'use strict';  

// const endpoint = 'https://json-express.herokuapp.com/api/v0/definitions';      
const endpoint = '';

fetch(endpoint)                           

  .then(function(response) {                    
                                        
      if(!response.ok) {                
        throw new Error('Not 200 OK');  
      }                                 
      
      console.log(response.url);

      return response.json(); 
      
  })                                  

  .then(function(gallery) {
   
    let main = document.querySelector("main");  
    
    main.innerhtml = gallery[0];

    // gallery.forEach(insert_img);      
    
    // function insert_img(item, index) { 
    //   main.innerHTML = main.innerHTML + `<img src="${gallery[index].pathURL}" alt="a broken image"></img>`;
    // };
    
  })

  .catch(function(err) {              
    console.log(err)
  });



// ****************************************  COMMENTS  **************************************************
//
//  Line 1:  Since this code is running in the browser, 'use strict' can be implemented
//  
//
//  *****************************************************************************************************
  
