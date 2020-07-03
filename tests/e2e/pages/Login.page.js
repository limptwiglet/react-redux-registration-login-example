import Page from './page'

class LoginPage extends Page {
  get url() { return 'login'; }

  get loginBtn() { return $('button=Login'); }
  get registerBtn() { return $('button=Register'); }
  get usernameInput() { return $('input[name="username"]'); }
  get passwordInput() { return $('input[name="password"]'); }
  get loginErrorMessage() { return $('div=Username or password is incorrect'); }
  get registrationSuccessMessage() { return $('div=Registration successful'); }

  // define or overwrite page methods
  open() {
    super.open(this.url);
  }

  login(user, pass) {
    this.usernameInput.setValue(user);
    this.passwordInput.setValue(pass);
    this.loginBtn.click();
  }
}

export default new LoginPage();
