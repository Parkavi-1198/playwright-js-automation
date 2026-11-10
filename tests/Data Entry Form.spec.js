import{test,expect} from'@playwright/test';
test('Data Entry Form',async({page})=>{
test.setTimeout(60000);
await page.goto('https://testautomationpractice.blogspot.com/');
await page.title('//h2[contains(text(),"Data Entry Form")]');
console.log('Title of the page is:',await page.title());
await page.locator('//input[@id="name"]').fill('Parkavi');
await page.waitForTimeout(2000);
await page.locator('//input[@id="email"]').fill('parkavibabu1198@gmail.com');
await page.waitForTimeout(2000);
await page.locator('//input[@id="phone"]').fill('8056970308');
await page.waitForTimeout(2000);
await page.locator('//textarea[@class="form-control"]').fill('2/35 OMR Road, Chennai');
await page.waitForTimeout(2000);
await page.mouse.wheel(0,500);
await page.waitForTimeout(3000);
await page.locator('//input[@id="female"]').click();
await page.waitForTimeout(2000);
await page.locator('//input[@id="sunday"]').check();
await page.waitForTimeout(2000);
await page.locator('//input[@id="monday"]').check();
await page.waitForTimeout(2000);
await page.mouse.wheel(0,500);
const drpDown = page.locator('//select[@id="country"]');
await drpDown.selectOption('usa');
await page.waitForTimeout(2000);
const drpDown1 = page.locator('//select[@id="colors"]');
await drpDown1.selectOption('red');
await page.waitForTimeout(2000);
const drpDown2 = page.locator('//select[@id="animals"]');
await drpDown2.selectOption('cat');
await page.waitForTimeout(2000);
// Mouse hover
await page.getByRole('button', { name: 'Point Me' }).hover();
const mobiles = page.getByRole('link', { name: 'Mobiles' });
await expect(mobiles).toBeVisible();  
await mobiles.click();
await page.waitForTimeout(2000);
// Double click
await page.getByRole('button', { name: 'Copy Text' }).dblclick();
await expect(page.locator('#field2')).toHaveValue('Hello World!');
//drag and drop
const source = page.locator('#draggable');
const target = page.locator('#droppable');
await source.dragTo(target);
await page.waitForTimeout(3000);
});