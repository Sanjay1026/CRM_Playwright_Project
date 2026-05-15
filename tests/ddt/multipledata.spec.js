import { test } from "@playwright/test";
import data from "../../testdata/singledata..json";
//? or
// import fs from "fs";
// import { json } from "stream/consumers";
// let datafile = fs.readFileSync(
//   "C:/Users/sanja/OneDrive/Desktop/Playwright/testdata/singledata..json",
// );
// let data = JSON.parse(datafile);

test("multiple data without array Only object", async ({ page }) => {
  await page.goto(data.url);
  await page.getByLabel("Username").fill(data.username);
  await page.getByLabel("Password ").fill(data.password);
  await page.getByRole("button", { name: "Submit" }).click();
  await page.waitForTimeout(2000);
  let title = await page.title();
  console.log(title);
  if (title == "Logged In Successfully | Practice Test Automation") {
    console.log("Valid Credential");
  } else {
    console.log("InValid Credential");
  }
});

test.only("multiple data Array with objects", async ({ page }) => {
  //   data.forEach((d) => {
  //     let url = d.url;
  //     let u = d.username;
  //     let p = d.password;
  //     await page.goto(url);       //! forEach() does NOT handle async/await properly
  //   });

  //* Correct Way → for...of
  for (const testdata of data) {
    let url = testdata.url;
    let username = testdata.username;
    let password = testdata.password;

    await page.goto(url);
    await page.getByLabel("Username").fill(username);
    await page.getByLabel("Password ").fill(password);
    await page.getByRole("button", { name: "Submit" }).click();
    await page.waitForTimeout(2000);
    let title = await page.title();
    // console.log(title);
    if (title == "Logged In Successfully | Practice Test Automation") {
      console.log("Valid Credential");
    } else {
      console.log("InValid Credential");
    }
  }
});

//? for...of Loop
// Used to iterate over VALUES

//``````````````````````````````````````````````````

//? try for array with objects with key's
// check data in Readme file
