import { test, chromium, firefox } from "@playwright/test";

//? 1. page.setViewportSize()
//? 2. page.viewportSize()
//? 3. page.title()
//? 4. page.url()

// test("Control browser", async ({ page }) => {
//   await page.goto("https://in.linkedin.com/");
//   await page.setViewportSize({ width: 500, height: 500 }); // setting our own size
//   const size = await page.viewportSize(); // to view size
//   const title = await page.title(); // to get title
//   console.log(size);
//   console.log("Title of the page is: " + title);
//   console.log("Url of the page is: " + (await page.url())); // to get url
// });

//? 5. context.cookies()
//* it retrieves  all cookies for the current browser

// test("Getting ", async ({ browser }) => {
//   let context = await browser.newContext();
//   let page = await context.newPage();
//   console.log(await context.cookies()); //* to collect the cookies, o/p: [] empty

//   //* assigning url to get some cookies
//   await page.goto("https://in.linkedin.com/");
//   console.log(await context.cookies()); //* getting some data in an [],those are cookies
// });

//? 6. chromium.launch()
//* used to launch chromium browser instance
// test("Using chromium", async () => {
//   let browser = await firefox.launch(); // launching chromium
//   let context = await browser.newContext(); // creating browser
//   let page = await context.newPage(); // creating page/tab in browser
//   await page.goto("https://google.com"); // searching for url
// });

//todo  Browser: The actual browser instance (Chromium / Firefox / WebKit)
//? const browser = await chromium.launch();
//todo Context: Independent session inside browser
//? const context = await browser.newContext();
// Has its own:
// Cookies
// Cache
// Storage

//todo Page: A tab inside context
//? const page = await context.newPage();

//! note:
//* Browser → contains multiple contexts → each context contains multiple pages

//? 7. browser.newContext()
//? 8. Context.newPage()
//? 9. page.goto("URL")

//? 10. page.screenshot
//* syntax: page.screenShot({path})

// test("ss", async ({ page }) => {
//   await page.goto("https://in.linkedin.com/");
//   await page.screenshot({ path: "Screenshot/photo1.png" });
//   //? to give different name with date and time  ,if multiple ss are captured
//   //? store data and tim ein a variable , to give it for all files
//   let data = new Date().getTime();
//   await page.screenshot({ path: `Screenshot/--page-${data}.png` });
// });

//? 11. browser.close()

// test("closing", async ({ page, browser }) => {
//   await browser.close(); //! browser is closed
//   await page.goto("https://google.com"); // cannot search for url
// });

//* Additional browser controls
// await page.goBack();
// await page.goForward();
// await page.reload();
