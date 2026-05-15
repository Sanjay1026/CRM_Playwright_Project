import { test } from "@playwright/test";
import landing from "../PageObjectModel/landingpage.js";
import signUp from "../PageObjectModel/signupPage.js";
import signIn from "../PageObjectModel/signInPage.js";
import homepage from "../PageObjectModel/Homepage.js";
import createTicket from "../PageObjectModel/CreateTicketpage.js";
import { ValueType } from "exceljs";
import path from "node:path";
import testdata from "../testdata/e2e1.json";

test("Small CRM ", async ({ page }) => {
  // to handel alret event
  page.on("dialog", (dialog) => {
    console.log(dialog.message());
    dialog.accept();
  });

  let landingpage = new landing(page);
  let signuPage = new signUp(page);
  let signinPage = new signIn(page);
  let homePage = new homepage(page);
  let createTicketPage = new createTicket(page);

  let url = testdata.url;
  let un = testdata.Name;
  let mail = testdata.Emailid;
  let password = testdata.password;
  let repassword = testdata.RePassword;
  let cont = testdata.Contactno;
  let subj = testdata.subject;
  let des = testdata.discription;

  // launch the url
  await page.goto(url);
  await landingpage.signupLink.click();
  // pass name for name TF
  await signuPage.nameTF.fill(un);
  // pass email tF
  await signuPage.emailTF.fill(mail);
  // pass password
  await signuPage.passwordTF.fill(password);
  // pass repasssword
  await signuPage.rePasswordTF.fill(repassword);
  // pass contact number
  await signuPage.contactTF.fill(cont);
  // gender radio button
  await signuPage.maleRadio.click();
  // click on Submit button
  await signuPage.submitButton.click();
  // handle with alret -- get the message
  // pass email
  await signinPage.emailTextField.fill(mail);
  // pass password
  await signinPage.passwordTextField.fill(password);
  // click on Login
  await signinPage.loginButton.click();
  // click create ticket
  await homePage.createTicketLink.click();
  // fill subject
  await createTicketPage.subjectTF.fill(subj);
  // select task type
  await createTicketPage.TTDropdown.selectOption({ Value: "ot1" });
  // fill priority
  await createTicketPage.PriorityDropDown.selectOption({ value: "important" });
  // fill discription
  await createTicketPage.DescriptionTextArea.fill(des);
  // click on send
  await createTicketPage.sendButton.click();
  // click on view ticket
  await homePage.viewTicketLink.click();
  // take a screen shot
  await page.screenshot({ path: "Screenshot/ticketphoto2.png" });
});
