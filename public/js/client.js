'use strict';  

const endpoint = 'https://sait-wbdv-cpnt262-a4.herokuapp.com/api/v0/gallery';   

fetch(endpoint)                           

  .then(function(response) {                    
                                        
    if(!response.ok) {                
      throw new Error('Not 200 OK');  
    }                                 
      
    return response.json(); 
      
  })                                  

  .then(function(gallery) {
   
    let main = document.querySelector('main');  
    
    main.innerHTML = gallery[0].pathURL;

    // gallery.forEach(insert_img);      
    
    // function insert_img(item, index) { 
    //   main.innerHTML = main.innerHTML + `<img src="${gallery[index].pathURL}" alt="a broken image"></img>`;
    // };
    
  })

  .catch(function(error) {              
    console.log(error)
  });



// ****************************************  COMMENTS  **************************************************
//
//  Line 1:  Since this code is running in the browser, 'use strict' can be implemented
//  
//
//  *****************************************************************************************************
  
