// Other html contact form js
const formName = document.getElementById('name');
const formPhone = document.getElementById('number');
const formMail = document.getElementById('email');
const suggestions = document.getElementById('suggestions');
const sendBtn = document.getElementById('sendBtn');
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const pkMobileRegex = /^(?:\+92|0092|92|0)?3\d{2}[- ]?\d{7}$/;


function formatPkMobile(input) {
    const cleaned = input.replace(/[^\d+]/g, "");
    let digits = cleaned.replace(/^\+/, "");

    if (digits.startsWith("0092")) digits = digits.slice(4);
    else if (digits.startsWith("92")) digits = digits.slice(2);
    else if (digits.startsWith("0")) digits = digits.slice(1);

    if (!/^3\d{9}$/.test(digits)) return null;
    return `+92${digits}`;
}

function detailsCheck() {
    let nameVal = formName.value.trim();
    let phoneVal = formPhone.value.trim();
    let emailVal = formMail.value.trim();
    let suggestionVal = suggestions.value.trim();

    let missing = [];

    if (nameVal === "") missing.push("Name");
    if (phoneVal === "") missing.push("Phone");
    if (emailVal === "") missing.push("Email");
    if (suggestionVal === "") missing.push("Suggestion");

    if (missing.length === 4) {
        alert("Please fill the contact form");
        return;
    }

    if (missing.length > 0) {
        alert("Please enter: " + missing.join(", "));
        return;
    }

    if (!formatPkMobile(phoneVal)) {
        alert("Invalid Pakistan mobile number");
        return;
    }
    if (!emailRegex.test(emailVal)) {
        alert("Invalid email address");
        return;
    }
    localStorage.setItem("Name", nameVal);
    localStorage.setItem("Phone", phoneVal);
    localStorage.setItem("Email", emailVal);
    localStorage.setItem("Suggestion", suggestionVal);

    alert("✅ Contact form saved successfully!");
    formName.value = "";
    formPhone.value = "";
    formMail.value = "";
    suggestions.value = "";

}

sendBtn.addEventListener("click", detailsCheck);