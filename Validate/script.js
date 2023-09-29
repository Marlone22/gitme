let form = document.querySelector("form");
let submit = document.querySelector("#submit");

function validate(event) {
    var firstName = document.getElementById("firstName");
    var middleName = document.getElementById("middleName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var Valid = true;

    //  First Name
    if (firstName.value.trim() === "") {
        Valid = false;
        showErrorMessage(firstName, "Please enter your First Name.");
    } else {
        hideErrorMessage(firstName);
    }

    // Last Name
    if (lastName.value.trim() === "") {
        Valid = false;
        showErrorMessage(lastName, "Please enter your Last Name.");
    } else {
        hideErrorMessage(lastName);
    }

    //  Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        Valid = false;
        showErrorMessage(email, "Please enter a valid Email.");
    } else {
        hideErrorMessage(email);
    }

    //  Password
    if (password.value.length < 6) {
        Valid = false;
        showErrorMessage(password, "Password must be at least 6 characters long.");
    } else {
        hideErrorMessage(password);
    }

    //  Confirm Password
    if ( password.value !== confirmPassword.value) {
        Valid = false;
        showErrorMessage(confirmPassword, "Passwords do not match.");
    } else {
        hideErrorMessage(confirmPassword);
    }

    document.getElementById("register").disabled = !Valid;

    displayWelcomeMessage(firstName, lastName);
    
}

function register() {
    document.getElementById("welcomeMessage");
}

function reset() {
    document.getElementById("registrationForm").reset();
    document.querySelectorAll(".error-message").forEach(element => {
        element.textContent = "";
    });
    document.getElementById("register").disabled = true;
}

function showErrorMessage(inputElement, message) {
    var parent = inputElement.parentElement;
    var errorElement = parent.querySelector(".error-message");

    if (errorElement) {
        errorElement.textContent = message; 
    } else {
        errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;

        parent.appendChild(errorElement);
    }

    inputElement.classList.add("invalid");
}


function hideErrorMessage(inputElement) {
    var parent = inputElement.parentElement;
    var errorElement = parent.querySelector(".error-message");

    if (errorElement) {
        parent.removeChild(errorElement);
    }

    inputElement.classList.remove("invalid");


}

function displayWelcomeMessage(firstName, lastName) {
    var welcomeMessage = "Welcome, " + firstName + " " + lastName + "!";
    var welcomeElement = document.getElementById("welcomeMessage");

    if (welcomeElement) {
        welcomeElement.textContent = welcomeMessage;
    }
}





