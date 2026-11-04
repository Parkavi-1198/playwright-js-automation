import { test, chromium, expect } from "@playwright/test";
test("Navigation",async()=>{
test.setTimeout(60000);
const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://www.saucedemo.com/");
console.log("Starting page URL:", await page.url());
await page.waitForTimeout(6000);
//User name
await page.locator("//*[@id='user-name']").fill("standard_user");
await page.waitForTimeout(6000);
//password
await page.locator("//*[@id='password']").fill("secret_sauce");
await page.waitForTimeout(6000);
//login button
await page.locator("//*[@id='login-button']").click();
await page.waitForTimeout(6000);
//After login page URL
console.log("After login page URL:", await page.url());
//Add to cart 2nd product
await page.locator ("(//button[text()='Add to cart'])[2]").click();
await page.waitForTimeout(6000);
//Add to cart 4th product
await page.locator ("(//button[text()='Add to cart'])[4]").click();
await page.waitForTimeout(6000);
//add to cart 6th product
await page.locator ("//*[@id='add-to-cart-test.allthethings()-t-shirt-(red)']").click();
await page.waitForTimeout(6000);
//click on cart
await page.locator("//*[@class='shopping_cart_link']").click();
await page.waitForTimeout(6000);
//Add to cart page URL
console.log("Add to cart page URL:", await page.url());
await page.waitForTimeout(6000);
//Back to home page
await page.goBack();
await expect(page).toHaveURL(" https://www.saucedemo.com/inventory.html");
//refresh the page
await page.reload();
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
await expect(page.locator(".inventory_list")).toBeVisible();

})
