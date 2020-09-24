const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it("returns a string description for a valid breed, via callback", () => {
    fetchBreedDescription('bombay', (error, desc) => {
      assert.strictEqual(error, null);
      const expectedDesc = "The the golden eyes and the shiny black coa of the Bopmbay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.strictEqual(desc, expectedDesc);
    });
  });
  it("returns \"This isn't a cat, sorry!\" when the user inputs a non-valid breed, via callback", () => {
    fetchBreedDescription('doggie', (error, desc) => {
      assert.strictEqual(error, null);
      const expectedDesc = "This isn't a cat, sorry!";
      assert.strictEqual(desc, expectedDesc);
    });
  });
});