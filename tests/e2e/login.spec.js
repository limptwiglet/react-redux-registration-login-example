import HomePage from './pages/Home.page';
import LoginPage from './pages/Login.page';
import RegisterPage from './pages/Register.page';

describe('Login page', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('should show an error when invalid details entered', () => {
    LoginPage.login('doesntexist', 'invalid');

    expect(LoginPage.loginErrorMessage).toBeVisible();
  });

  it('should redirect to home page when valid details entered', () => {
    RegisterPage.open();
    RegisterPage.register('user1', 'pass');

    LoginPage.registrationSuccessMessage.waitForDisplayed();

    LoginPage.login('user1', 'pass');

    HomePage.welcomeText.waitForDisplayed();

    expect(HomePage.title.getText()).toContain('user1');
  });
});
