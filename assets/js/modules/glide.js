document.addEventListener('DOMContentLoaded', function() {
    new Glide('.glide', {
        type: 'carousel',
        autoplay: 3000,
        hoverpause: false,
        animationDuration: 800
    }).mount()
})
