class landing {
  constructor(page) {
    this.signupLink = page.locator(
      "[class='btn btn-primary btn-xl rounded-pill mt-5']",
    );
  }
}

export default landing;
