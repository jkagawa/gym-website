const signedin = localStorage.getItem("signedin");
const username = localStorage.getItem("username");
const signInItem = document.getElementById("sign-in-item");
const signOutItem = document.getElementById("sign-out-item");
const toast = document.getElementById("toast");

toast.textContent = `Welcome ${username}, you are signed in`;

if(signedin === 'true') {
    toast.style.display = "flex";
    signInItem.style.display = "none";
    signOutItem.style.display = "block";
    hideToast();
} else {
    signInItem.style.display = "block";
    signOutItem.style.display = "none";
}

function signIn() {
    localStorage.setItem("signedin", true);
    const username = "Josh";
    localStorage.setItem("username", username);
    window.location.href = "/";
}

function hideToast() {
    setTimeout(() => toast.style.opacity = 0, 5000);
}