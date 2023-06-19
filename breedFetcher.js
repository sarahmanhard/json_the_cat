const request = require('request');

const breedName = process.argv[2];

if (!breedName) {
  console.log('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

const endpoint = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;


request(endpoint, (error, response, body) => {
  if (error) {
    console.error('Request error:', error);
  } else {
    if (response.statusCode === 200) {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const breed = data[0];
        console.log('Description:', breed.description);
      } else {
        console.log(`Breed '${breedName}' not found.`);
      }
    } else {
      console.error(`Request failed with status code ${response.statusCode}`);
    }
  }
});
