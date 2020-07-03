export default class Page {
    open(path) {
        browser.url(path)
    }

    authUser() {
      return browser.execute(function() {
        const user = {
          id: 1,
          username: 'username',
          firstName: 'firstName',
          lastName: 'lastName',
          token: 'fake-jwt-token',
        };

        localStorage.setItem('user', JSON.stringify(user));

        return user;
      });
    }
}
