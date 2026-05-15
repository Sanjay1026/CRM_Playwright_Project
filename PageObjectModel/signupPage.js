class signUp {
  constructor(page) {
    this.nameTF = page.locator("//input[@id='name']");
    this.emailTF = page.locator("//input[@id='email']");
    this.passwordTF = page.locator("//input[@id='password']");
    this.rePasswordTF = page.locator("//input[@id='cpassword']");
    this.contactTF = page.locator("//input[@name='phone']");
    this.maleRadio = page.locator("//input[@name='gender' and @value='m']");
    this.femaleRadio = page.locator("//input[@name='gender' and @value='f']");
    this.submitButton = page.getByRole("button", { name: "Submit" });
  }
}

export default signUp;
