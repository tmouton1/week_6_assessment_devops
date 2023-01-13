
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

// require('./main')



const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('clicking draw button displays choices', async () =>
{
    const button = await driver.findElement(By.id('draw'))
    const displayed = await driver.findElement(By.xpath('.//choices'))
    expect(displayed).toBe(true)
})
test('clicking add duo displays player duo', async () => {   
   const button = await driver.findElement(By.className('bot-btn'))
   const displayed = await driver.findElement(By.id('playerDuo'))
   expect(displayed).toBe(true)
   


   

    

})



    



    


       
    
