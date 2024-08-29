document.addEventListener("DOMContentLoaded", function() {
	// Get all dropdown buttons
	var dropdowns = document.querySelectorAll(".dropdown");
	var dropdownContent = dropdown.querySelector(".dropdown-content");
	const imagePage = document.getElementById("imgPage");
	const videoPage = document.getElementById("vidPage");

	// Close the dropdown if the user moves the mouse away from it
	window.addEventListener("hover", function(event) {
		dropdowns.forEach(function(dropdown) {
			if (!dropdown.contains(event.target)) {
				dropdownContent.style.display = "none";
			}
		});
	});

	// Toggle the dropdown when the user hovers over the button
	dropdowns.forEach(function(dropdown) {
		dropdown.querySelector(".dropbtn").addEventListener("hover", function() {
			dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
		});
	});
});