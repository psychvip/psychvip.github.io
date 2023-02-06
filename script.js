let featsOpen = true, videoOpen = false;
let loginOpen = false, registerOpen = false, forgotOpen = false;

function openFeats() {
    let feats = document.getElementsByClassName("features")[0];
    let hidebtn = document.getElementsByClassName("hide-btn")[0];
    if (feats.style.left === "-160px") {
        featsOpen = true;
        feats.style.left = "0px";
        hidebtn.style.left = "155px";
        hidebtn.innerHTML = "&lt;-";
    } else {
        featsOpen = false;
        feats.style.left = "-160px";
        hidebtn.style.left = "-5px";
        hidebtn.innerHTML = "-&gt;";
    }
    console.log("featsOpen: " + featsOpen);
}

//if window is resized and feats are open and window is less than 671px, close feats
window.addEventListener("resize", function() {
    let windowOpen = videoOpen || loginOpen || registerOpen || forgotOpen;
    let feats = document.getElementsByClassName("features")[0];
    let hidebtn = document.getElementsByClassName("hide-btn")[0];
    if (featsOpen && window.innerWidth <= 671 && windowOpen) {
        featsOpen = false;
        feats.style.left = "-160px";
        hidebtn.style.left = "-5px";
        hidebtn.innerHTML = "-&gt;";
    }
});

function showLogin() {
    let logincontainer = document.getElementById("login-container");
    let videocontainer = document.getElementById("video-container");
    if (logincontainer.style.display === "block") {
        loginOpen = false;
        logincontainer.style.display = "none";
    } else {
        if(videocontainer.style.display === "block") {
            videocontainer.style.display = "none";
        }
        loginOpen = true;
        logincontainer.style.display = "block";
    }
    console.log("loginOpen: " + loginOpen);
}

function showVideo() {
    let logincontainer = document.getElementById("login-container");
    let videocontainer = document.getElementById("video-container");
    if (videocontainer.style.display === "block") {
        videoOpen = false;
        videocontainer.style.display = "none";
    } else {
        if(logincontainer.style.display === "block") {
            logincontainer.style.display = "none";
        }
        videoOpen = true;
        videocontainer.style.display = "block";
    }
    console.log("videoOpen: " + videoOpen);
}

function forgotPassword() {
    if (document.getElementById("pass-input").style.display === "none") {
        forgotOpen = false;
        loginOpen = true;
        document.getElementById("user-input").placeholder = "email/user";
        document.getElementById("pass-input").style.display = "inline-block";
        document.getElementById("email-input").style.display = "none";
        document.getElementById("invite-input").style.display = "none";
        document.getElementById("login-container").style.height = "285px";
        document.getElementById("submit-btn").innerText = "login";
        document.getElementById("forgot-btn").innerText = "4got pwd?";
        document.getElementById("register-btn").innerText = "register";
    } else {
        forgotOpen = true;
        loginOpen = false;
        document.getElementById("pass-input").style.display = "none";
        document.getElementById("email-input").style.display = "none";
        document.getElementById("invite-input").style.display = "none";
        document.getElementById("user-input").placeholder = "email/user";
        document.getElementById("login-container").style.height = "240px";
        document.getElementById("submit-btn").innerText = "reset";
        document.getElementById("forgot-btn").innerText = "back";
        document.getElementById("register-btn").innerText = "register";
    }
    console.log("forgotOpen: " + forgotOpen);
}

function showRegister() {
    if (document.getElementById("email-input").style.display === "none" || document.getElementById("invite-input").style.display === "none") {
        registerOpen = true;
        loginOpen = false;
        document.getElementById("email-input").style.display = "inline-block";
        document.getElementById("invite-input").style.display = "inline-block";
        document.getElementById("pass-input").style.display = "inline-block";
        document.getElementById("user-input").placeholder = "user";
        document.getElementById("login-container").style.height = "400px";
        document.getElementById("submit-btn").innerText = "make acc";
        document.getElementById("register-btn").innerText = "back";
        document.getElementById("forgot-btn").innerText = "4got pwd?";
    } else {
        registerOpen = false;
        loginOpen = true;
        document.getElementById("email-input").style.display = "none";
        document.getElementById("invite-input").style.display = "none";
        document.getElementById("pass-input").style.display = "inline-block";
        document.getElementById("user-input").placeholder = "email/user";
        document.getElementById("login-container").style.height = "285px";
        document.getElementById("submit-btn").innerText = "login";
        document.getElementById("register-btn").innerText = "register";
        document.getElementById("forgot-btn").innerText = "4got pwd?";
    }
    console.log("registerOpen: " + registerOpen);
}