
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the Draw button displays the div with id="choices"', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(2000);
    const botCard = await driver.findElement(By.xpath("(//div/div[contains(@class, 'bot-card')])[1]"));

    const displayed = botCard.isDisplayed();
    expect(displayed);
})

test('clicking the "Add to Duo" button displayes the div with id="player-duo"', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(200);
    const botButton = await driver.findElement(By.xpath("(//div/button[contains(@class, 'bot-btn')])[1]"));

    const displayed = botButton.isDisplayed();
    expect(displayed);


})