const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    // test("check to see if items in shuffleArray are the same as returned array ", () => {
    //     expect(arrCopy[i]).toBe(shuffleArray[i]);
    //   })

    test("check to see if returned array has the same length as shuffleArray", () => {
      const originalArr = [1,2,3,4,5];
      const shuffled = shuffleArray(originalArr)
      let originalLength = originalArr.length
      let shuffledLength = shuffled.length
        expect(originalLength).toEqual(shuffledLength);
      })
})