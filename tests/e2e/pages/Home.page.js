import Page from './page'

class HomePage extends Page {
  get url() { return ''; }

  get title() { return $('h1'); }
  get welcomeText() { return $('p=You\'re logged in with React!!'); }
  get usersList() { return $('#users').$$('li'); }
  get logoutLink() { return $('a=Logout'); }

  // define or overwrite page methods
  open() {
    super.open(this.url);
  }
}

export default new HomePage();
