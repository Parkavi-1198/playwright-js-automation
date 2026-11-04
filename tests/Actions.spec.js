import{test} from'@playwright/test';
test('Action',async({page})=>{
await page.goto('https://www.omrbranch.com/apitestingtraininginchennaiomr');
await page.title('//h2[contains(text(),"Register")]');
console.log('Title of the page is:',await page.title());
//First name
await page.locator('//input[@id="first_name"]').fill('Greens');
//Last name
await page.locator('//input[@id="last_name"]').fill('Technology');
await page.waitForTimeout(6000);
//address
await page.locator('//textarea[@class="form-control address"]').fill('2/35 OMR Road, Chennai');
await page.waitForTimeout(6000);
//email
await page.locator('//input[@id="email"]').fill('greens.technology@gmail.com');
await page.waitForTimeout(6000);
//phone
await page.locator('//input[@id="phone"]').fill('9876543210');
//gender
await page.locator('//input[@id="male"]').click();
await page.waitForTimeout(6000);
//hobbies
await page.locator('//input[@id="checkbox-cricket"]').check();
await page.locator('//input[@id="checkbox-movie"]').check();
});

