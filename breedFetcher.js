const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    const data = JSON.parse(body);
    
    if (data.length === 0) {
      callback(new Error("The breed is not found"), null);
    } else {
      callback(null, data[0].description);
    }
  
  });
};

//fetchBreedDescription();
module.exports = { fetchBreedDescription };