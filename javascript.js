document.addEventListener("DOMContentLoaded", function() {
    // Event listener for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Event listener for adding shoes to cart
    const addToCartButtons = document.querySelectorAll(".btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Item added to cart");
        });
    });

    // Function for changing the image in About section
    function changeImage(smallImage) {
        const fullImage = document.getElementById("imagebox");
        fullImage.src = smallImage.src;
    }

    // Attach event listeners to small images in About section
    const smallImages = document.querySelectorAll(".about_small_image img");
    smallImages.forEach(image => {
        image.addEventListener("click", function() {
            changeImage(this);
        });
    });

    // Event listener for social media icons in the main section
    const socialIcons = document.querySelectorAll(".social_icon i");
    socialIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const platform = this.classList[1].split("-")[2];
            const url = {
                "facebook": "https://www.facebook.com",
                "twitter": "https://www.twitter.com",
                "instagram": "https://www.instagram.com",
                "linkedin": "https://www.linkedin.com"
            }[platform];
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
});
