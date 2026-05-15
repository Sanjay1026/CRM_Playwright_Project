import { test } from "@playwright/test";

test("DropDown", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
  await page.locator("#select3").selectOption({ value: "India" });
  await page.waitForTimeout(3000);
});

test.only("Multiple Options", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1",
  );
  await page.waitForTimeout(3000);
  await page
    .locator("//select[@id='select-multiple-native']")
    .selectOption([
      { label: "Mens Casual Premium ..." },
      { label: "Mens Cotton Jacket..." },
    ]);
  // label and index is working
  // Value is not working for multiple options
  await page
    .locator(
      "//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']",
    )
    .click();

  await page.waitForTimeout(3000);
});

// Custom dropdown
// pending to practice
