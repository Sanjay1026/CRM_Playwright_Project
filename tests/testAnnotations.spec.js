//? Annotations = special labels/controls you apply to tests to change their behavior
// Skip tests
// Run only specific tests
// Mark failures as expected
// Slow down tests
// Tag tests

import { test } from "@playwright/test";

//* test.only
// test.only("annotation", async ({ page }) => {
//   console.log("test-1");
// });
// Only this test will run, others are ignored.

test("demo", () => {
  console.log("test-2");
});

test.skip("demo2", () => {
  // skipped
  console.log("test-3");
});

// //* Dynamic skipping

// test("Dynamic", async ({ browsername }) => {
//   test.skip(browsername === "firefox");
// });

//* test.fail() → Expected to fail
test("Known bug test", async ({ page }) => {
  await page.goto("https://in.linkedin.com/");
});

//? If test fails → marked as pass (expected failure)
//? If test passes → marked as unexpected pass (FAIL)

//* test.slow() → Increase timeout  -- Default time is 30seconds
// test("Slow test", async ({ page }) => {
//   test.slow();
//   await page.goto("https://example.com");
// });

//* test.describe()  : Group Level Annotations

//* test.fixme() → Needs fixing
// test.fixme("Broken test", async ({ page }) => {
// // test
// });
