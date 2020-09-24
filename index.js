const { fetchBreedDescription } = require('./breedFetcher.js');

let breedName = process.argv[2];

const callback = function(error, desc) {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(breedName, callback);