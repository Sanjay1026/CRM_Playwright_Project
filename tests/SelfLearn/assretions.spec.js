const { test, expect } = require("@playwright/test");

//* 1. Hard Assertion
//? A hard assertion means:
//? “If validation fails, stop execution immediately.”

test("Assertions", async ({ page }) => {
  //open url
  await page.goto("https://demo.nopcommerce.com/register");
  console.log(await page.title()); // nopCommerce demo store. Register

  //todo 1) expect (page). toHaveURL() -- Page has URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  //todo 2) expect(page).toHaveTitle() -- Page has title

  //   await expect(page).toHaveTitle("nopCommerce demo store.");     //! error
  //!   Expected: "nopCommerce demo store. ";
  //!   Received: "nopCommerce demo store. Register";
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //todo 3) expect(locator).toBeVisible() -- Element is visible
  //? it performs an assertion
  //? if condition passes → test continues
  //? if condition fails → test fails with error
  await expect(await page.locator(".header-logo")).toBeVisible();
  // ex-2
  const element = await page.locator('//*[@id="main"]/div/section/div/div[2]/form/section[1]/div/div[1]/label');
  await expect(element).toBeVisible();

  //todo 4) expect (locator) . toBeEnabled () -- Control is enabled
  //todo    expect (locator) . toBeDisabled() -- Element is disabled

  //   await expect(await page.locator("//input[@id='gender-male']")).toBeDisabled();
  // Expected: disabled
  // Received: enabled

  await expect(await page.locator("//input[@id='gender-male']")).toBeEnabled();
  // Expected: enabled
  // Received: enabled

  //todo 5) expect (locator) . toBeChecked () -- Radio/Checkbox is checked

  await page.locator("//input[@id='gender-male']").click(); // select radio button
  await page.waitForTimeout(2000);

  await expect(await page.locator("//input[@id='gender-male']")).toBeChecked(); // checking whether it is selected or not

  //checkbox
  await expect(await page.locator("#NewsLetterSubscriptions_0__IsActive")).toBeChecked();

  //todo  6) expect(locator).toHaveAttribute() -- Element has attribute

  await expect(await page.locator("#Company")).toHaveAttribute("type", "text");

  //todo 7) expect(locator) .toHaveText() -- Element matches text

  await expect(await page.locator("//div[@class='page-title'] ")).toHaveText("Register"); // full name

  //todo 8) expect(locator) .toContainText() -- Element contains text

  await expect(await page.locator("//div[@class='page-title'] ")).toContainText("Regi"); // partial name

  // 9) expect (locator) . toHaveValue (value) -- Input has a value

  await page.locator("//input[@id='Email']").fill("sanjay@gmail.com");
  //   await expect(page.locator("//input[@id='Email']")).toHaveValue("sanjay@gmail.com");

  //? Negative assertion
  await expect(page.locator("//input[@id='Email']")).not.toHaveValue("ram@gmail.com");
  //? this negative (not) can be given for all assertions ..

  //todo 10) expect(locator).toHaveCount() --  List of elements has given length

  await expect(await page.locator("#country Option")).toHaveCount(10);
});

//* 2. Soft Assertion
//? Soft assertion means:
//? “Even if validation fails, continue execution.”
//? At the end:
//? all failures are collected
//? test fails after execution completes

// example: await expect.soft(await page.locator("#country Option")).toHaveCount(10);

// | Feature                     | Hard Assertion | Soft Assertion |
// | --------------------------- | -------------- | -------------- |
// | Stops execution on failure  | ✅ Yes          | ❌ No           |
// | Continues remaining steps   | ❌ No           | ✅ Yes          |
// | Default in Playwright       | ✅ Yes          | ❌ No           |
// | Failure shown immediately   | ✅ Yes          | ❌ No           |
// | Multiple failures collected | ❌ No           | ✅ Yes          |
