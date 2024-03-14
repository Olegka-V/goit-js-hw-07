const login = document.querySelector(".login-form");

login.addEventListener("submit", checkComplate);


function checkComplate(event) {
    event.preventDefault();
    const focusEl = event.target;
    const email = focusEl.elements.email.value.trim();
    const pass = focusEl.elements.password.value.trim();

    if (email === "" || pass === "") {
        alert('All form fields must be filled in');
    }
    console.log(`Email: ${email}, Password: ${pass}`);
    focusEl.reset();
}