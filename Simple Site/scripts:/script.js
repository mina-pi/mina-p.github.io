// form validation
function validateForm(event) {
    event.preventDefault(); // prevent premature submission

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (!nameInput.value) {
        alert("Please enter your name.");
        return;
    }

    if (!emailInput.value || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!messageInput.value) {
        alert("Please enter your message.");
        return;
    }

    alert("Thank you for your message! We'll get back to you soon.");
    document.getElementById("contactForm").reset(); // reset form
}

// validation attachment
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", validateForm);
    }
});
