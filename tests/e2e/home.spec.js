import HomePage from './pages/Home.page';
import LoginPage from './pages/Login.page';

describe('Home page', () => {
  before(() => {
    // Double open because Chrome doesn't allow localStorage access on data URLs
    HomePage.open();
  });

  beforeEach(() => {
    HomePage.authUser();
    HomePage.open();
  });

  it('should show the welcome message', () => {
    expect(HomePage.welcomeText).toBeVisible();
  });

  it('should redirect after logout', () => {
    HomePage.logoutLink.click();
    let pageUrl = '';

    browser.waitUntil(() => {
      pageUrl = browser.getUrl();
      return pageUrl.indexOf(LoginPage.url) > -1
    }, 5000);

    expect(HomePage.welcomeText).not.toBeVisible();
    expect(LoginPage.loginBtn).toBeVisible();
  });
});
