const request = require('request');
const catName = process.argv[2];



request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("The breed is not found.");
  } else {
    
    console.log(data[0].description);
    console.log(typeof data);
  }

});