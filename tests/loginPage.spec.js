import { test } from "@playwright/test";
import login from "../PageObjectModel/loginpage";
import data from "../testdata/LoginPageData.json";

test("Login page", async ({ page, browserName }) => {
  let log = new login(page);

  let url = data.url;
  let u = data.username;
  let pwd = data.password;

  // Enter url
  await page.goto(url);
  // Enter username
  await log.usernameTF.fill(u);
  // Enter Password
  await log.passwordTextField.fill(pwd);
  // Click on login button
  await log.submitButton.click();
  await page.waitForTimeout(2000);
  console.log(browserName); // chromium
  console.log(await page.title()); //Logged In Successfully | Practice Test Automation
});
