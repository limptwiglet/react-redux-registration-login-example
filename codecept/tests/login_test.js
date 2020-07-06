Feature('login');

Scenario('failed login', (I) => {
	I.amOnPage('http://localhost:8080/login');
	I.see('Login');

	I.fillField('username', 'mark');
	I.fillField('password', 'mark');

	I.click('Login');

	I.see('Username or password is incorrect');
});

Scenario('successful login and logout', (I) => {
	const username = 'boss';
	const password = 'valid';

	I.amOnPage('http://localhost:8080/login');

	I.store('users', [{ id: 1, username, password, firstName: 'Mark', lastName: 'Gerrard' }]);

	I.refreshPage();

	I.fillField('username', username);
	I.fillField('password', password);

	I.click('Login');

	I.see('Hi Mark!');
	I.see('You\'re logged in with React!!');

	I.click('Logout');

	I.see('Login');
});
