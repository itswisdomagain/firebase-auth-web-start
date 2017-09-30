
function loginWithEmailAndPassword() {
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;
	showSuccess('Your email is ' + email);
}

function registerWithEmailAndPassword() {
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;
	showSuccess('Your want to register with ' + email);
}

function loginWithGoogle() {
	showError('Login with Google not yet implemented!');
}

function signOut() {
	showSuccess("You will be signed out soon, don't worry...");
}

function showError(errorMessage) {
	hideSuccess();
	document.getElementById('errorBox').innerHTML = errorMessage;
	document.getElementById('errorBox').style.display = 'block';
}

function hideError() {
	document.getElementById('errorBox').style.display = 'none';
}

function showSuccess(errorMessage) {
	hideError();
	document.getElementById('successBox').innerHTML = errorMessage;
	document.getElementById('successBox').style.display = 'block';
}

function hideSuccess() {
	document.getElementById('successBox').style.display = 'none';
}