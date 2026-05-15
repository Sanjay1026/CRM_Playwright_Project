// One with test.only()
// One with test.skip()
// One with @smoke tag

import { test } from "@playwright/test";

// 1. only
test.only("using only", async ({ page }) => {
  await page.goto("https://example.com");
  console.log("Executing only this, skipping other scripts");
});

// 2. skip
test.skip("Skipping", async ({ page }) => {
  await page.goto("https://example.com");
  console.log("This test will be skipped");
});

// 3. smoke tag
test("Verify title @smoke", async ({ page }) => {
  await page.goto("https://google.com");
  console.log("thissss");

  //   await expect(page).toHaveTitle(/Example/);
});
