function showLogin() {
    let logincontainer = document.getElementById("login-container");
    if (logincontainer.style.display === "none") {
        logincontainer.style.display = "block";
    } else {
        logincontainer.style.display = "none";
    }
}

function forgotPassword() {
    if (document.getElementById("pass-input").style.display === "none") {
        document.getElementById("user-input").placeholder = "mail/user";
        document.getElementById("pass-input").style.display = "inline-block";
        document.getElementById("email-input").style.display = "none";
        document.getElementById("invite-input").style.display = "none";
        document.getElementById("submit-btn").innerText = "login";
    } else {
        document.getElementById("pass-input").style.display = "none";
        document.getElementById("email-input").style.display = "none";
        document.getElementById("invite-input").style.display = "none";
        document.getElementById("user-input").placeholder = "mail/user";
        document.getElementById("submit-btn").innerText = "reset";
    }
}

function showRegister() {
    if (document.getElementById("email-input").style.display === "none" || document.getElementById("invite-input").style.display === "none") {
        document.getElementById("email-input").style.display = "inline-block";
        document.getElementById("invite-input").style.display = "inline-block";
        document.getElementById("pass-input").style.display = "inline-block";
        document.getElementById("user-input").placeholder = "user";
        document.getElementById("submit-btn").innerText = "make acc";
    } else {
        document.getElementById("email-input").style.display = "none";
        document.getElementById("invite-input").style.display = "none";
        document.getElementById("pass-input").style.display = "inline-block";
        document.getElementById("user-input").placeholder = "mail/user";
        document.getElementById("submit-btn").innerText = "login";
    }
}
document.getElementById("forgot-btn").addEventListener("click", forgotPassword);
document.getElementById("register-btn").addEventListener("click", showRegister);