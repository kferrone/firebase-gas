class Dude {
  public fart: string = 'boofy';
}

const gmail = GmailApp;

const spa = SpreadsheetApp;

const greeter = (person: string) => {
  return `Hello, ${person}!`;
}

function testGreeter() {
  const user = 'Grant';
  Logger.log(greeter(user));
}