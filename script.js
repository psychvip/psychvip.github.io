function showLogin() {
    let logincontainer = document.getElementById("login-container");
    if(logincontainer.style.display === "none") {
        logincontainer.style.display = "block";
    } else {
        logincontainer.style.display = "none";
    }
}