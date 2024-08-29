document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".autogallery2");

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

	setInterval(indexUp, 5000)
	
	function indexUp() {
		currentIndex = (currentIndex + 1) % gallery.children.length;
        showImage(currentIndex);
	}
	
	// Set the gallery width initially and on window resize
    setGalleryWidth();
    window.addEventListener("resize", setGalleryWidth);
});