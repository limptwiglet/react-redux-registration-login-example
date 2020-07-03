import HomePage from './pages/Home.page';
import LoginPage from './pages/Login.page';
import RegisterPage from './pages/Register.page';

describe('Register page', () => {
  beforeEach(() => {
    RegisterPage.open();
  });

  it('should show errors when input empty', () => {
    RegisterPage.firstNameInput.setValue('first');
    RegisterPage.lastNameInput.setValue('last');
    RegisterPage.usernameInput.setValue('name');
    RegisterPage.registerBtn.click();

    expect(RegisterPage.passwordError).toBeVisible();
  });

  it('should create the user and allow for login', () => {
    RegisterPage.firstNameInput.setValue('first');
    RegisterPage.lastNameInput.setValue('last');
    RegisterPage.usernameInput.setValue('name');
    RegisterPage.passwordInput.setValue('pass');
    RegisterPage.registerBtn.click();

    LoginPage.registrationSuccessMessage.waitForDisplayed();
    LoginPage.login('name', 'pass');

    HomePage.welcomeText.waitForDisplayed();

    expect(HomePage.title.getText()).toContain('first');
  });
});
