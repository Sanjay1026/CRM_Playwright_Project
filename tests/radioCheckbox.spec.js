// const { page } = require("@playwright/test");
import { test, expect } from "@playwright/test";

test("RadioButton", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
  await page.locator("//input[@id='attended']");
  await page.waitForTimeout(2000);

  //   let result = await page.locator("//input[@id='attended']").isChecked(); // gives boolean value
  //   console.log(result);

  //? Assertion to verify checked
  // to check whether radiobutton is check or not
  //   await expect(await page.locator("//input[@id='attended']")).toBeChecked();

  //? Assertion to verify Unchecked
  //! playwright don't have any toBeUnchecked() method
  await expect(
    await page.locator("//input[@id='attended']").isChecked(),
  ).toBeFalsy();
});

// isChecked() - gives true if checked , if not false
// But it will not stop the execution
// Assertion will stop the execution if it is not checked.

test.only("checkBox", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
  await page.locator("//input[@id='domain_a']").check();
  await page.waitForTimeout(3000);
  await page.locator("//input[@id='domain_a']").uncheck();
  await page.waitForTimeout(3000);

  // add assertion id needed
});
