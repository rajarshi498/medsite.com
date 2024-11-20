document.addEventListener("DOMContentLoaded", () => {
    let selectedRating = 0;
    const starRating = document.getElementById("star-rating");
    const reviewForm = document.getElementById("reviewForm");
    const reviewsList = document.getElementById("reviews-list");

    // Handle star rating selection
    starRating.addEventListener("click", (event) => {
        if (event.target.classList.contains("star")) {
            const ratingValue = parseInt(event.target.getAttribute("data-value"));
            selectedRating = ratingValue;
            updateStarRating(ratingValue);
        }
    });

    // Update the stars based on the rating
    function updateStarRating(ratingValue) {
        const stars = starRating.getElementsByClassName("star");
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.remove("selected");
            if (i < ratingValue) {
                stars[i].classList.add("selected");
            }
        }
    }

    // Handle form submission
    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("patient-name").value;
        const reviewText = document.getElementById("review-text").value;

        if (!name || !reviewText || selectedRating === 0) {
            alert("Please fill in all fields and provide a rating.");
            return;
        }

        // Create new review element
        const newReview = document.createElement("div");
        newReview.classList.add("review-item");

        const reviewHTML = `
            <h3>${name}</h3>
            <div class="review-rating">${"★".repeat(selectedRating)}${"☆".repeat(5 - selectedRating)}</div>
            <p>${reviewText}</p>
        `;
        newReview.innerHTML = reviewHTML;

        // Append the new review to the list
        reviewsList.insertBefore(newReview, reviewsList.firstChild);

        // Reset form
        reviewForm.reset();
        updateStarRating(0);
        selectedRating = 0;
    });
});