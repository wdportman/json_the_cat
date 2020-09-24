//Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed.


const request = require('request');

let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
let query = process.argv[2];

request(url+query, (error, response, body) => {
  if (error) {
    console.log(JSON.parse(error));
  }
  if (body === "[]") {
    console.log("That's not a cat, sorry!");
  } else {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  }
});