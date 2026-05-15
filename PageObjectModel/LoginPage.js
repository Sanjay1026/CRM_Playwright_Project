class login {
  constructor(page) {
    this.usernameTF = page.locator("//input[@id='username']");
    this.passwordTextField = page.locator("//input[@id='password']");
    this.submitButton = page.getByRole("button", { name: "Submit" });
  }
}

export default login;
