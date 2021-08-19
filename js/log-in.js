// * log in button
document.getElementById('login-button').addEventListener('click', function() {
	// ?User Email
	const emailInput = document.getElementById('user-email');
	const userEmail = emailInput.value;
	// ?User Password
	const passwordInput = document.getElementById('user-password');
	const userPassword = passwordInput.value;

	// ? user login condition
	const email = 'zap@gmail.com';
	const password = 'zapzap';
	if (userEmail == email && userPassword == password) {
		window.location.href = 'banking.html';
	}
});
