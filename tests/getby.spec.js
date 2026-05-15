import { test } from "@playwright/test";

test("checking login", async ({ page }) => {
  await page.goto("https://www.qaplayground.com/login");
  //* getByLabel()
  await page.getByLabel("Email", { exact: false }).fill("sanjay1212@gmai.com");
  await page.getByLabel("Password", { exact: true }).fill("1234567891");
  //   await page.locator("//button[@type='submit']").click();
  //   //* getByRole()
  await page.getByRole("button", { name: "Sign In" }).click();
});

//* GetByText()
test("get by ", async ({ page }) => {
  await page.goto("https://www.qaplayground.com/");
  await page.getByText("☕ Buy me a coffee").click();
});

//* GetByPlaceholder()
test.skip("Get by placeholder", async ({ page }) => {
  await page.goto("https://www.qaplayground.com/bank");
  await page
    .getByPlaceholder("Enter your username", { exact: true })
    .fill("Sanjay");
  await page
    .getByPlaceholder("Enter your password", { exact: true })
    .fill("Sanjay@123");
  await page.getByRole("button", { name: "Clear" }).click();
});
//-- working
// Login button is not working

//* getByAltText()
test("ALt text", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Flogin");
  await page.getByAltText("nopCommerce").click();
});

//* getByTitle()
test.only("Title", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  // await page.getByTitle("Show products in category Apparel").click();
  //! resolved to 3 elements: with the above test 3 elements are found ,
  //! always elements need to be identified uniquely..
  //! So , now use first()
  await page
    .getByTitle("Show products in category Apparel", { exact: true })
    .first()
    .click();
});

//* getByRole()
test("Role-2", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  //   await page.getByRole("link", { name: " Electronics " }).first().click(); //? it can also done using getByText()
  await page.getByRole("link", { name: "Forums" }).click();
});
