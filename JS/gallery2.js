document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery2");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
	
	// Function to calculate and set the gallery width
    function setGalleryWidth() {
        const galleryItems = gallery.children;
        const galleryWidth = galleryItems.length * 100; // Each image takes 100%
        gallery.style.width = `${galleryWidth}%`;
    }

    // Function to show the current image
    function showImage(index) {
        gallery.style.transform = `translateX(-${index * (100 / gallery.children.length)}%)`;
    }

    // Function to handle next button click
    function nextImage() {
        currentIndex = (currentIndex + 1) % gallery.children.length;
        showImage(currentIndex);
    }

    // Function to handle previous button click
    function prevImage() {
        currentIndex = (currentIndex - 1 + gallery.children.length) % gallery.children.length;
        showImage(currentIndex);
    }

    // Add event listeners to the buttons
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
	
	// Set the gallery width initially and on window resize
    setGalleryWidth();
    window.addEventListener("resize", setGalleryWidth);
});