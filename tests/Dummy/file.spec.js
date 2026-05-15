import { test } from "@playwright/test";

test("tiger application", async ({ page }) => {
  await page.goto("http://localhost:8888/");
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(5000);
});

test("radio button", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
  await page.locator("//input[@id='attended']");
  await page.waitForTimeout(4000);
  // await page.getByRole("button", { name: "Attended" }).click();
  let result = await page.locator("//input[@id='attended']").isChecked();
  console.log(result);

  // await page.waitForTimeout(4000);
});
