Feature('register');

Scenario('should validate user input', (I) => {
	I.amOnPage('/');

	I.click('Register');

	I.see('Register', 'h2');

	console.log(locate('form').find('input'));

	I.fillField('firstName', 'Mark');
	I.fillField('lastName', 'Gerrard');
	I.fillField('username', 'MarkG');

	I.click('Register');

	I.see('Password is required');
});

Scenario('clicking cancel', (I) => {
	I.amOnPage('/register');

	I.click('Cancel');

	I.see('Login');
});

Scenario('should register new user', (I) => {
	I.amOnPage('/');

	I.click('Register');

	I.see('Register');

	I.fillField('firstName', 'Bill');
	I.fillField('lastName', 'Baggins');
	I.fillField('username', 'BillBaggins');
	I.fillField('password', 'theshire');

	I.click('Register');

	I.see('Registration successful');
});

Scenario('should be able to login with new user', (I) => {
	I.amOnPage('/register');

	const username = 'BillBaggins';
	const password = 'theshire';

	I.fillField('firstName', 'Bill');
	I.fillField('lastName', 'Baggins');
	I.fillField('username', username);
	I.fillField('password', password);

	I.click('Register');

	I.see('Registration successful');

	I.fillField('username', username);
	I.fillField('password', password);

	I.click('Login');

	I.see('Hi Bill!');
});

Scenario('should be able to delete user', (I) => {
	I.amOnPage('/register');

	const username = 'BillBaggins';
	const password = 'theshire';

	I.fillField('firstName', 'Bill');
	I.fillField('lastName', 'Baggins');
	I.fillField('username', username);
	I.fillField('password', password);

	I.click('Register');

	I.see('Registration successful');
	
	I.fillField('username', username);
	I.fillField('password', password);

	I.click('Login');

	I.click('Delete');

	I.click('Logout');

	I.see('Login');

	I.fillField('username', username);
	I.fillField('password', password);

	I.click('Login');

	I.see('Username or password is incorrect');
});
