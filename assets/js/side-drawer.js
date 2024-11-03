document.addEventListener('DOMContentLoaded', function () {
    const triggers = ['.burger-icon', '.close-drawer'],
        drawer = document.querySelector('.side-drawer');

    triggers.forEach(elem => {
        Array.from(document.querySelectorAll(elem)).forEach(item => {
            item.addEventListener("click", toggleDrawer);
        });
    });

    function toggleDrawer() {
        const isOpen = drawer.classList.toggle('active');
        drawer.setAttribute('aria-hidden', !isOpen);
        document.querySelector('.burger-icon').setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle("drawer-open", isOpen);
    }

    window.addEventListener("click", (event) => {
        if (drawer.classList.contains('active') && !drawer.contains(event.target) && !event.target.closest('.burger-icon')) {
            toggleDrawer();
        }
    });
});
