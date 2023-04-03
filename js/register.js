
function validateUsername(username, message) {

	var char1;
	var hasNumber;
	if (username.length < 8) {
		message.valueOf =
			"User name must be at least 8 characters";
		return false;
	}
	char1 = username.substr(0, 1).toUpperCase();
	if (!(char1 >= "A" && char1 <= "Z")) {
		message.valueOf =
			"First character must be A-Z or a-z";
		return false;
	}

	hasNumber = /\d/;
	if (!(hasNumber.test(username))) {
		message.valueOf =
			"User name must contain " +
			"at least one numeral";
		return false;
	}
	return true;
} //end function

function validateForm(e) {
    'use strict';
	if (typeof e == 'undefined') e = window.event;
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var userName = U.$('userName');
	var email = U.$('email');
	var phone = U.$('phone');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var terms = U.$('terms');

	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		error = true;
	}

	// Validate the last name:
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
	} else {
		addErrorMessage('lastName', 'Please enter your last name.');
		error = true;
	}

	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}
	
	//Validate the username using a validation function:
	var msg = "initial message";
	msg = Object(msg);
	if(validateUsername(userName.value, msg)) {
		//The username meets requirements
		removeErrorMessage('userName');
	}
	else {
		//The username is not valid
		addErrorMessage('userName', msg.valueOf);
		error = true;
	}
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}

	// Validate the city:
	if (/^[A-Z \.\-']{2,20}$/i.test(city.value)) {
		removeErrorMessage('city');
	} else {
		addErrorMessage('city', 'Please enter your city.');
		error = true;
	}

	// Validate the state:
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
	} else {
		addErrorMessage('state', 'Please select your state.');
		error = true;
	}
	
	// Validate the zip code:
	if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
	} else {
			addErrorMessage('zip', 'Please enter your zip code.');
		error = true;
	}
	if (error) {
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.
function toggleSubmit() {
	'use strict';
	var submit = U.$('submit');
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function

window.onload = function() {
    'use strict';

    U.addEvent(U.$('theForm'), 'submit', validateForm);
	U.$('submit').disabled = true;
    U.addEvent(U.$('terms'), 'change', toggleSubmit);
	U.enableTooltips('phone');
    
};