import{test}from'@playwright/test';
test('Screenshot',async({page})=>{
await page.goto('https://www.omrbranch.com/apitestingtraininginchennaiomr');  
//Take screenshot of the page
await page.screenshot({path:'screenshot.png', fullpage: true});
//to check specific locator 
const logo = page.locator ("//img[@id='profile_picture']");
await logo.screenshot({path:'logo.png'});
})
