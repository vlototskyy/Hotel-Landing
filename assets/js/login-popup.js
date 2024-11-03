document.addEventListener('DOMContentLoaded', function () {
    const triggers = ['.close-login', '.button', '.sign-in']

    function toggleLoginPopup() {
        const loginPopup = document.getElementById("login-popup"),
            isHidden = loginPopup.style.display === "none" || !loginPopup.style.display;
        loginPopup.style.display = isHidden ? "flex" : "none";
        loginPopup.setAttribute("aria-hidden", !isHidden);
        document.body.classList.toggle("popup-displayed", isHidden);
    }

    triggers.forEach(elem => {
       Array.from(document.querySelectorAll(elem)).forEach(item => {
        item.addEventListener("click", toggleLoginPopup);
       })
    });

    window.addEventListener("click", (event) => {
        const loginPopup = document.getElementById("login-popup");
        if (event.target === loginPopup) {
            toggleLoginPopup();
        }
    });
})