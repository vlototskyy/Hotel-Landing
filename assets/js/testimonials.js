document.addEventListener('DOMContentLoaded', function () {
    const baseUrl ='/Hotel-Landing/assets/data/',
        testimonialsContainer = document.querySelector('.reviews-container'),
        glideElement = testimonialsContainer.closest('.glide'),
        maxRating = 5;

    fetchReviews();

    async function fetchReviews() {
        try {
            const response = await fetch('../../data/mock_data_testimonials.json');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            populateReviewsBlock(data);
            initSlider(glideElement);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function populateReviewsBlock(reviews) {
        reviews.forEach(review => {
            const reviewElement = createReviewCard(review);
            testimonialsContainer.appendChild(reviewElement);
        });
    }

    function createReviewCard(review) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-card');

        reviewElement.innerHTML = `
            <div class="review-header">
                <img class="reviewer-photo" src="${review.reviewer_photo}" alt="${review.reviewer_name}'s photo">
                <span>${review.reviewer_name}</span>
                <p>${review.review_text}</p>
            </div>
            <div class="review-footer">
                <p class="review-rating">Rating: ${createStars(review.review_rating)}</p>
                <p class="review-date">Date: ${review.review_date}</p>
            </div>
        `;

        return reviewElement;
    }

    function createStars(rating) {
        let stars = '';

        for (let i = 0; i < maxRating; i++) {
            if (i < rating) {
                stars += '<span class="star star-filled">★</span>';
            } else {
                stars += '<span class="star">★</span>';
            }
        }

        return stars;
    }

    function initSlider(element) {
        const glide = new Glide(element, {
            type: 'carousel',
            autoplay: 3000,
            animationDuration: 800,
            hoverpause: false,
            gap: 35,
            perView: 3,
            breakpoints: {
                767: {
                    perView: 1
                },
                1199: {
                    perView: 2
                }
            }
        });

        glide.mount();
    }
});