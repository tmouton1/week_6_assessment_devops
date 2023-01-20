import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"
import { ARRAY } from "sequelize"

import { createDocumentRegistry } from "typescript"


const {shuffleArray} = require('./utils')


const array = [1,2,3,4,5]

    test('shufflArray returns same length as array',
     () => {
     expect(shuffleArray(array)).toHaveLength(array.length)}),
    
        test('shuffleArray returns a length of 4 elements.', 
        () => {
            expect((shuffleArray.length)).toHaveReturnedWith(4);}
         
         )
     

require('./utils')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeEach(async () => {
    driver.get('http://localhost:4000/')

})

    afterAll(async () => {
        driver.quit()
  
})


