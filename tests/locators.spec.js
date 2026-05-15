//todo : Locators

import { test } from "@playwright/test";
test("Valid login with correct credentials", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  //? using css locators
  //   await page.locator('input[id = "username"]').fill("student");
  await page.locator("#username").fill("student");
  await page.locator('input[id = "password"]').fill("Password123");
  await page.locator('button[class="btn"]').click();

  //? using xpath
  // username textfield
  //   await page.locator("//input[@id='username']").fill("student");
  // password textfield
  //   await page.locator("//input[@name='password']").fill("Password123");
  // submit button
  //   await page.locator("//button[@id='submit']").click();
  //   await page.screenshot({ path: "Screenshot/login1.png" });
});

//* using GetBy methods

test.only("validate login credential", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.getByLabel("Username").fill("Sanjay");
  await page.getByLabel("password").fill("2121221");
  await page.getByRole("button", { name: "Submit" }).click();
});
