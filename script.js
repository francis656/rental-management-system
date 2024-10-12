// User login storage simulation
let users = [];

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    // Simulate login by checking if email exists, or register the email
    const existingUser = users.find(user => user.email === email);
    if (!existingUser) {
        users.push({ email });
        alert("New user registered.");
    }
    proceedToTenantData();
});

// Proceed to Tenant Data Entry Section
function proceedToTenantData() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("tenantDataSection").style.display = "block";
}

// Handle Tenant Data Form Submission
document.getElementById("tenantDataForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const tenantName = document.getElementById("tenantName").value;
    const roomNumber = document.getElementById("roomNumber").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    if (tenantName && roomNumber && phoneNumber) {
        document.getElementById("tenantDataSection").style.display = "none";
        document.getElementById("paymentSection").style.display = "block";
    } else {
        alert("Please fill in all the details.");
    }
});

// Handle Payment Completion
document.getElementById("completePaymentButton").addEventListener("click", function () {
    document.getElementById("paymentSection").style.display = "none";
    document.getElementById("thankYouSection").style.display = "block";
    startCountdown(35); // 5-day countdown
});

// Countdown for Next Payment (35 days)
function startCountdown(days) {
    const countdownElement = document.getElementById("countdown");
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + days);

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));

        if (daysLeft >= 0) {
            countdownElement.innerHTML = `${daysLeft} day(s) left to make next payment.`;
        } else {
            clearInterval(timer);
            countdownElement.innerHTML = "Payment window closed. Notification sent to vacate.";
            sendVacateNotification();
        }
    }, 1000);
}

// Simulated Email Notification for Vacating
function sendVacateNotification() {
    // Mocking the email sending process
    alert("Email notification sent to tenant to vacate the property.");
}
