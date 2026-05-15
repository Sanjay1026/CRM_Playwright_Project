import { test } from "@playwright/test";

// test("hard coded wait", async ({ page }) => {
//   await page.waitForTimeout(5000);
//   await page.goto("https://practicetestautomation.com/practice-test-login/");
//   await page.waitForTimeout(5000);
//   await page.getByLabel("Username").fill("student");
//   await page.waitForTimeout(5000);
//   await page.getByLabel("Password ").fill("Password123");
//   await page.waitForTimeout(5000);
//   await page.getByRole("button", { name: "Submit" }).click();
//   await page.waitForTimeout(5000);
// });

// disadvantages
//? even the page is ready within 2-3 seconds , it will wait for 5 seconds to complete
//? if internet connection is slow , it may take more than 5 seconds , then it is going to fails
//? which result inconsistency

//* used for auto suggestions
//Example

test("Suggestions", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.locator("//input[@id='twotabsearchtextbox']").fill("shirt");
  await page.waitForTimeout(5000);
  let suggestions = await page.locator("//div[@role='row']").allTextContents();
  console.log(suggestions);
});
