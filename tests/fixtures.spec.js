import { test } from "@playwright/test";

test("fixtures", async ({ browser, browserName }) => {
  //   await page.goto("https://in.linkedin.com/");
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://in.linkedin.com/");
  console.log(browserName);
});
