const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle navbar links on mobile
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function togglePass() {

    var x = document.getElementById("login-form-password");
    var showIcon = document.getElementById("show-icon");
    var hideIcon = document.getElementById("hide-icon");
    if (x.type === "password") {
        x.type = "text";
        showIcon.style.display = "none";
        hideIcon.style.display = "block";
    } else {
        x.type = "password";
        showIcon.style.display = "block";
        hideIcon.style.display = "none";
    }
}

//register 
function togglePass(inputId, showIconId, hideIconId) {
    const input = document.getElementById(inputId);
    const showIcon = document.getElementById(showIconId);
    const hideIcon = document.getElementById(hideIconId);

    if (input.type === "password") {
        input.type = "text";
        showIcon.style.display = "none";
        hideIcon.style.display = "inline";
    } else {
        input.type = "password";
        showIcon.style.display = "inline";
        hideIcon.style.display = "none";
    }
}
