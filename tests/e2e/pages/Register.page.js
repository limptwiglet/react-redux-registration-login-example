import Page from './page'

class RegisterPage extends Page {
  get url() { return 'register'; }

  get cancelBtn() { return $('a=Cancel'); }
  get registerBtn() { return $('button=Register'); }
  get firstNameInput() { return $('input[name="firstName"]'); }
  get lastNameInput() { return $('input[name="lastName"]'); }
  get usernameInput() { return $('input[name="username"]'); }
  get passwordInput() { return $('input[name="password"]'); }
  get passwordError() { return $('div=Password is required'); }

  register(user, pass) {
    this.firstNameInput.setValue(user);
    this.lastNameInput.setValue(user);
    this.usernameInput.setValue(user);
    this.passwordInput.setValue(pass);
    this.registerBtn.click();
  }

  // define or overwrite page methods
  open() {
    super.open(this.url);
  }
}

export default new RegisterPage();
