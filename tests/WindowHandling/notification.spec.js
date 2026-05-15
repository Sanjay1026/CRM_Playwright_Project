import { test } from "@playwright/test";

test("notification", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
  await page.getByRole("button", { name: "Notification" }).click();
  await page.waitForTimeout(2000);
  // -------- validation of permission status --------------------
  let result = await page.evaluate(async () => {
    return Notification.requestPermission();
  });
  console.log(`Permission: ${result}`); // Permission: denied
});

//* Notification.requestPermission()
//*     --> asks for permission
//*     --> returns Promise
// ----------------------------------------------------------

//? handling it ,
// notifications are browser permissions
// They are controlled using: browser.newContext()

// | Scenario              | Solution                              |
// | ------------------    | ------------------------------------- |
// | To Allow notification | permissions: ["notifications"]        |
// | To Block notification | default behavior OR clear permissions |

test.only("notification handling", async ({ browser }) => {
  let context = await browser.newContext({ permissions: ["notifications"] });
  let page = await context.newPage();
  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
  await page.getByRole("button", { name: "Notification" }).click();
  await page.waitForTimeout(2000);
  // -------- validation of permission status --------------------
  let result = await page.evaluate(async () => {
    return Notification.requestPermission();
  });
  console.log(`Before clear -Permission: ${result}`); // Permission: granted
  await context.clearPermissions();
});

//! Example- 3
//? Understanding how to clear the permission
test(" Clearing notification ", async ({ browser }) => {
  let context = await browser.newContext({ permissions: ["notifications"] });
  let page = await context.newPage();
  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
  await page.getByRole("button", { name: "Notification" }).click(); // permission granted
  await page.waitForTimeout(2000);
  // -------- validation of permission status --------------------
  let result = await page.evaluate(async () => {
    return Notification.requestPermission();
  });
  console.log(`Before clear -Permission: ${result}`); // Before clear -Permission: granted
  await context.clearPermissions(); // all permission cleared

  let result2 = await page.evaluate(async () => {
    return Notification.requestPermission();
  });
  console.log(`After clearing -Permission: ${result2}`); // After clearing -Permission: denied
});

//* Notes :
// clearPermissions() affects the WHOLE CONTEXT.
// Meaning: camera ,microphone,notifications, geolocation

//* You can clear specific origin permissions too:
// await context.grantPermissions(
//   ["notifications"],
//   { origin: "https://demoapps.qspiders.com" }
// );
