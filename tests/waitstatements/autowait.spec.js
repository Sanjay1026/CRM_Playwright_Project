import { test } from "@playwright/test";
//or
// const { test } = require("@playwright/test");

test("auto wait", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("//input[@name='username']").fill("student"); // fill as auto wait
  await page.locator("//input[@name='password']").fill("Password123");
  await page.locator("//button[@id='submit']").click({ timeout: 5000 }); // click has auto wait 30seconds , but making it 5seconds
});

//-- if something goes wrong -- it takes 30seconds to check
//? example
test.only("auto wait -2", async ({ page }) => {
  page.setDefaultTimeout(5000); // making default time from 30seconds to 5seconds
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("//input[@name='usernam']").fill("student"); // given xpath wrong
  await page.locator("//input[@name='password']").fill("Password123");
  await page.locator("//button[@id='submit']").click(); // click has auto wait
});

// showing error in 5seconds
