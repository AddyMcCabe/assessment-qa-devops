const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test("check to see if items in shuffleArray are the same as returned array ", () => {
        expect(shuffleArray()[i]).toBe(shuffleArray[i]);
      })

    test("check to see if returned array has the same length as shuffleArray", () => {
        expect(shuffleArray().length).toEqual(shuffleArray.length);
      })
})