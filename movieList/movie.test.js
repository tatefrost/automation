const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
  await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

test('deleting a movie', async () => {
  await driver.findElement(By.xpath('//input')).sendKeys('The god father')

  await driver.findElement(By.xpath('//button')).click()

  await driver.findElement(By.xpath('//ul/li/button')).click()

  await driver.sleep(5000)
})

test('Delete tittle message', async () => {
  await driver.findElement(By.xpath('//input')).sendKeys('The god father')

  await driver.findElement(By.xpath('//button')).click()

  await driver.findElement(By.xpath('//ul/li/button')).click()

  const movieDeleted = await driver.findElement(By.xpath('//aside')).getText()

  expect(movieDeleted).toEqual('The god father deleted!')

  await driver.sleep(5000)
})

test('Movie watched', async () => {
  await driver.findElement(By.xpath('//input')).sendKeys('The god father')

  await driver.findElement(By.xpath('//button')).click()

  await driver.findElement(By.xpath('//li/span')).click()

  const movieWatched = await driver.findElement(By.xpath('//aside')).getText()

  expect(movieWatched).toEqual('The god father watched!')

  await driver.sleep(5000)
})


afterAll(async () => {
  await driver.quit()
})