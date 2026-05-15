import { test } from "@playwright/test";
import { loadavg } from "node:os";

test("multiple tabs", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  //! scenario -1
  //   await page.goto(
  //     "https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off",
  //   );
  //   await page.click("[target='_blank']"); // opens new tab
  //   await page.waitForTimeout(3000);
  //   console.log(page.url()); // still getting page1 url only

  //! scenario -2
  await page.goto("https://www.redbus.in/");
  await page.click("[class='linkButton']");
  await page.waitForTimeout(3000);
  await page.click([(id = "account_dd")]);
  //Not able to find account id
});

//? Solution for above Scenario
//? Handling above scenario using page.waitForEvent()

test("Handling multiple tab", async ({ page }) => {
  //! scenario -1
  await page.goto(
    "https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off",
  );
  await page.waitForTimeout(2000);
  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("[target='_blank']"),
  ]);
  await page.waitForTimeout(3000);
  console.log(page2.url());

  //! scenario -2
  await page.goto("https://www.redbus.in/");
  await page.waitForTimeout(2000);
  let [p2] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("[class='linkButton']"),
  ]);

  await p2.click("//li[@id='account_dd']");
  await p2.waitForTimeout(3000);
});

//? Demo Qspider website
// Example - 3
test("In Qspider website", async ({ page }) => {
  await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1");
  await page.waitForTimeout(3000);
  let [page2] = await Promise.all([
    page.waitForEvent("popup"),
    // await page.getByRole("button", { name: "view more" }).first().click();
    //?or
    page.click(
      "//button[@class='mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500'][1]",
    ),
  ]);
  //   await page.waitForTimeout(3000);
  await page2
    .locator(
      "[class='bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-200']",
    )
    .click();
  await page2.waitForTimeout(3000);
});
// working

//? Handling multiple windows

test("Multiple windows", async ({ page }) => {
  await page.goto(
    "https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2",
  );
  await page.waitForTimeout(3000);
  let [p2] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole("button", { name: "Shop Now" }).click(),
  ]);

  await p2.getByRole("button", { name: "Add to Cart" }).click();
  await p2.waitForTimeout(5000);
});
