const { assert } = require('chai');
const { fetchBreedDescription } = require('../breedFetcher');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, description) => {
      // Asserting no error occurred
      assert.isNull(error);
      // Asserting description is returned
      assert.isString(description);
      done();
    });
  });

  it('returns an error and null description for an invalid breed, via callback', (done) => {
    fetchBreedDescription('InvalidBreed', (error, description) => {
      // Asserting error occurred
      assert.isNotNull(error);
      // Asserting description is null
      assert.isNull(description);
      // Asserting error message contains expected substring
      assert.include(error.message, 'Breed \'InvalidBreed\' not found.');
      done();
    });
  });
});

