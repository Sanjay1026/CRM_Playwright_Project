const { test, expect } = require("@playwright/test");

test("DropDown", async ({ page }) => {
  //todo multiple ways to select option in dropdown
  await page.goto("https://testautomationpractice.blogspot.com/");
  //   await page.locator("#country").selectOption("United Kingdom");          // using visible text
  //   await page.locator("#country").selectOption({ label: "United Kingdom" }); // using lable // visible text
  //   await page.locator("#country").selectOption({ value: "uk" }); // using  value
  //? value and visible text both are not same evertime , inspect and check it
  //   await page.locator("#country").selectOption({ index: 2 }); // using index

  //? Or Directly we call in page ficture without using locator
  //   await page.selectOption("#country", "India");

  //todo Assertions On drop down
  //! 1. Check no of option in drop down
  //   await expect(await page.locator("#country Option")).toHaveCount(10);

  //! 2.to check value in dropdown - approch 1
  //   //? to print all text which are kept as options
  //   let content = await page.locator("#country").textContent();
  //   console.log(content); // prints all the content

  //   await expect(content.includes("India")).toBeTruthy();
  // if present true , else false

  //! -approch 2, $$-> returns option in an array
  //   const options = await page.$$("#country Option");
  //   console.log("No of options: " + options.length);
  // No of options: 10

  // to select option using loop
  //   const options = await page.$$("#country option");

  //   for (const option of options) {
  //     let value = await option.textContent();

  //     if (value.includes("France")) {
  //       await page.selectOption("#country", { label: value });
  //       break;
  //     }
  //   }

  //! due to extra space in text, above code is not working
  //? so , using trim() to remove extra spaces

  const options = await page.$$("#country option");

  for (const option of options) {
    let text = await option.textContent();

    if (text.trim() === "France") {
      await page.selectOption("#country", { label: text.trim() });
      break;
    }
  }
});

//? multi select DropDown

test.only("multi DropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // to select multiple option in dropdown
  // pass values inside an array
  await page.selectOption("#colors", ["Red", "Blue", "Green"]);
  await page.waitForTimeout(4000);
});

//? Bootstrap multi select DropDown
// vedio 13
