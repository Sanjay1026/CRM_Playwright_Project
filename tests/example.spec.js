const { test, expect } = require("@playwright/test");

test("Open Google", async ({ page }) => {
  await page.goto("https://www.google.com");

  let title = await page.title();
  console.log(title);
  //or
  console.log(await page.title());

  // await expect(page).toHaveTitle(/Google/);
});
