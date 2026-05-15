import { test } from "@playwright/test";

test("Basic controls", async ({ page }) => {
  //  ---- click --------------
  await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
  await page.getByRole("button", { name: "Yes" }).click(); // left click
  await page.waitForTimeout(2000);
  //   await page.locator("//button[@id='btn_a']").click();
  //   await page.waitForTimeout(3000);

  // ------ Right click -----------
  await page.goto(
    "https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1",
  );
  await page.locator("//button[@id='btn_a']").click({ button: "right" }); // Doing right click
  await page.waitForTimeout(2000);

  // -------- Double click ------------
  await page.goto(
    "https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2",
  );
  //   await page.locator("//button[@id='btn_b']").click({ clickCount: 2 }); // 1st approach
  await page.locator("//button[@id='btn_b']").dblclick();
  await page.waitForTimeout(3000);

  // -------- Click and Hold using mouse? ----------
  // -------- Down and up ------------------
  await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0");
  await page.locator("//div[@class='zoom-button ']").hover();
  await page.mouse.down();
  await page.waitForTimeout(4000);
  await page.mouse.up();
  await page.waitForTimeout(3000);

  await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");
  await page.locator("//img[@src='/assets/message-hint-nbRmWGWf.png']").hover();
  await page.waitForTimeout(5000);
  await page.mouse.move(100, 200);
  await page.waitForTimeout(3000);

  // ----- to do force click -------
  await page.goto(
    "https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4",
  );
  //   await page.locator("//input[@id='submit']").click({ force: true });
  //? or
  await page.locator("//input[@id='submit']").dispatchEvent("click");
  await page.waitForTimeout(3000);
});
