import { test } from "@playwright/test";

test.skip("Basic", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByRole("button", { name: "Simple Alert" }).click();
  await page.getByRole("button", { name: "Confirmation Alert" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Prompt Alert" }).click();
  await page.waitForTimeout(2000);
});

// by default playwright is going to dismiss all the dialogs/popups
//? By writing script we need to handel it manually by using Event handlers.

test("Handing dialogs", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(2000);

  page.on("dialog", async (dialog) => {
    console.log(dialog.type()); // to get messages of dialogs

    if (dialog.type() === "alert") {
      await dialog.accept();
    } else if (dialog.type() === "confirm") {
      await dialog.accept();
    } else if (dialog.type() === "prompt") {
      await dialog.accept("Jerry");
    }
  });
  await page.getByRole("button", { name: "Simple Alert" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Confirmation Alert" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Prompt Alert" }).click();
  await page.waitForTimeout(2000);
});

//? using test.once event handler
test.only("Handing using page.once", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(2000);
  //   await page.getByRole("button", { name: "Simple Alert" }).click();
  //   await page.waitForTimeout(2000);
  //   await page.getByRole("button", { name: "Confirmation Alert" }).click();
  //   await page.getByRole("button", { name: "Prompt Alert" }).click();

  await page.once("dialog", async (dialog) => {
    console.log(dialog.type()); // Alert
    console.log(dialog.message()); // I am an alert box!

    dialog.accept("hii");
  });
  await page.getByRole("button", { name: "Simple Alert" }).click();
  await page.waitForTimeout(2000);
});
//* We mostly use once() when:
//? only one popup is expected
//? cleaner handling
//? avoids unwanted multiple listeners
