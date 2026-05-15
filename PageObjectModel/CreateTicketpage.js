class createTicket {
  constructor(page) {
    this.subjectTF = page.locator("//input[@name='subject']");
    this.TTDropdown = page.locator(
      "//select[@class='form-control select' and @name='tasktype']",
    );
    this.PriorityDropDown = page.locator(
      "//select[@class='form-control select' and @name='priority']",
    );
    this.DescriptionTextArea = page.locator("//textarea[@name='description']");
    this.sendButton = page.locator("//input[@type='submit']");
  }
}

export default createTicket;
