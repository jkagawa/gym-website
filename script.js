const signedin = localStorage.getItem("signedin");
const username = localStorage.getItem("username");
const signInItem = document.getElementById("sign-in-item");
const signOutItem = document.getElementById("sign-out-item");
const is_root = location.pathname == "/" || location.pathname == "/index.html";
const is_sign_in = location.pathname == "/sign-in.html";

if(is_sign_in) {
    const form = document.getElementById("form");
    form.addEventListener("submit", () => signIn());
}

if(signedin === 'true') {
    signInItem.style.display = "none";
    signOutItem.style.display = "block";
    if(is_root) {
        const toast = document.getElementById("toast");
        const toastText = document.getElementById("toast-text");
        toastText.textContent = `Welcome ${username}, you are signed in`;
        toast.style.display = "flex";
        hideToast(toast);
    }
    
} else {
    signInItem.style.display = "block";
    signOutItem.style.display = "none";
}

function signIn() {
    localStorage.setItem("signedin", true);
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.href = "index.html";
}

function hideToast(toast) {
    setTimeout(() => toast.style.opacity = 0, 5000);
}

function closeToast() {
    const toast = document.getElementById("toast");
    toast.style.display = "none";
}