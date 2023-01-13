import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"
import { ARRAY } from "sequelize"

import { createDocumentRegistry } from "typescript"


const {shuffleArray} = require('./utils')

require('./utils')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeEach(async () => {
    driver.get('http://localhost:4000/')

})

    afterAll(async () => {
        driver.quit()
  
})

let array = [1,2,3,4,5]

describe('shuffleArray test', () => {
    test('shuffleArray is not equal to array', 
    async () => {
     expect(shuffleArray).not.toBe(ARRAY)}
     
     )}),
     describe('shuffleArray test', () => {
        test('shuffleArray returns shuffled aray', 
        async () => {
            expect(shuffleArray).toHaveReturnedWith(4);}
         
         )})
     

