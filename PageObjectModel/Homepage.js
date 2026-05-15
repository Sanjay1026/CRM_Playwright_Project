class homepage {
  constructor(page) {
    this.createTicketLink = page.locator(
      '//a[@href="create-ticket.php" and text()=" Create Ticket"]',
    );
    this.viewTicketLink = page.locator(
      '//a[@href="view-tickets.php" and text()=" View Ticket"]',
    );
  }
}

export default homepage;
