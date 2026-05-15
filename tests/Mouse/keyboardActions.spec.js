import { test } from "@playwright/test";

test.only("Keyboard Actions", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
  //   await page.locator("#name").fill("sanjay");

  //* Using type
  //   await page.locator("#name").type("sanjay");
  //? using keyboard actions
  //   await page.locator("#name").click();
  //   await page.keyboard.type("sanjay");
  //? or
  //   await page.type("#name", "Sanjay");  //? we can write selector directly inside type

  await page.waitForTimeout(2000);

  //* Using insertText()
  await page.locator("#name").click();
  await page.keyboard.insertText("Sanjay");
  await page.waitForTimeout(1000); // just to understand execution slowly , not mandatory
  // first name entered , now give space and enter last name
  //? down and Up
  //* to type individual keywords
  await page.keyboard.down("Space"); // to press space
  await page.keyboard.up("Space"); // to release space
  await page.keyboard.down("S"); // to press S
  await page.keyboard.up("S"); // to release S
  await page.waitForTimeout(2000);

  //* press
  await page.keyboard.press("Tab");
  await page.keyboard.type("Sanjay26@gmail.com");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.waitForTimeout(2000);
  await page.keyboard.press("Tab");
  await page.keyboard.press("Control+V");
  await page.waitForTimeout(4000);

  await page.screenshot({ path: "Screenshot/Dummy.png" });
});

// ``````````````````````````````````````````````````````````````````````````
// Scrolling can also be don using up() and down()
// Example

test("Scrolling", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  //   await page.keyboard.press("ArrowDown"); // pressing will done only once
  //   await page.waitForTimeout(4000);
  // for pressing multiple time using looping
  for (let index = 1; index < 11; index++) {
    await page.keyboard.press("ArrowDown");
  }
  await page.waitForTimeout(3000);
  for (let index = 1; index < 6; index++) {
    await page.keyboard.press("ArrowUp");
  }
  await page.waitForTimeout(3000);

  console.log(page.url()); // to display the current url
});

// type ("String")
// insertText("String")

// press("individual text") -- press("A+B")
// up(<key>) and down(<key>)
