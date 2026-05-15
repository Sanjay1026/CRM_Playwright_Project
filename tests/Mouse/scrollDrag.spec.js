import { test } from "@playwright/test";

//?  ------ Scrolling --------------

test("Scroll", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
  await page.waitForTimeout(3000);
  await page.mouse.wheel(0, 1000); // to move down
  await page.waitForTimeout(3000);
  await page.mouse.wheel(0, -1000); // to move up

  // Horizontally
  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal");
  await page.waitForTimeout(3000);
  await page.mouse.wheel(1000, 0); // to move right side
  await page.waitForTimeout(3000);
  await page.mouse.wheel(-1000, 0); // to move left side

  //? to scroll to an element until it find checkbox
  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
  await page.waitForTimeout(2000);
  await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded(); // to scroll until it fnd checkbox
  await page.waitForTimeout(2000);
});

//? -------- drag and Drop ------------------

test("Drag and Drop-1", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0");
  await page.waitForTimeout(3000);
  await page.getByText("Drag Me").hover();
  await page.mouse.down();
  await page.mouse.move(100, 200);
  await page.waitForTimeout(3000);
  await page.mouse.up();
  await page.waitForTimeout(2000);
});

//? to drag and drop one location to Another location
//? Using mouse actions only

test("drag and drop-2", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2",
  );
  await page.waitForTimeout(3000);
  await page.getByText("Mobile Charger", { exact: true }).hover();
  await page.mouse.down(); // to hold it
  await page.locator("//div[text()='Mobile Accessories']").hover();
  await page.waitForTimeout(3000);
  await page.mouse.up(); // to release
  await page.waitForTimeout(3000);
  // working
});

//? Using mouse actions only
test("drag and drop-3", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2",
  );
  await page.waitForTimeout(3000);
  await page.getByText("Mobile Charger", { exact: true }).hover();
  await page.mouse.down(); // to hold it
  let box = await page
    .locator("//div[text()='Mobile Accessories']")
    .boundingBox(); //  to know x an dy values
  await page.mouse.move(box.x, box.y);
  await page.waitForTimeout(3000);
  await page.mouse.up();
  await page.waitForTimeout(3000);
});

// Using dragto()
test.only("Using dragTo", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2",
  );
  await page.waitForTimeout(3000);
  let source = await page.getByText("Mobile Charger", { exact: true });
  let target = await page.locator("//div[text()='Mobile Accessories']");
  await source.dragTo(target);
  await page.waitForTimeout(3000);
});
