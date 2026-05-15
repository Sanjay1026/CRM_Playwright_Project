class signIn {
  constructor(page) {
    this.emailTextField = page.locator("//input[@type='email']");
    this.passwordTextField = page.locator(
      "//input[@type='password' and @id='txtpassword'] ",
    );
    this.loginButton = page.getByRole("button", { name: "Login" });
  }
}

export default signIn;
