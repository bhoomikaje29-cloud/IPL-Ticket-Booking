
function showToast(message) {

    // Create a new div element
    const toast = document.createElement("div");

    // Add the message inside the toast
    toast.textContent = message;

    // Style the toast notification
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "#101d42";
    toast.style.color = "white";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "5px";
    toast.style.zIndex = "1000";

    // Display the toast on the webpage
    document.body.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(function () {
        toast.remove();
    }, 3000);
}

// Select all Book buttons
const bookButtons = document.querySelectorAll(".book-btn");

// Add click event to each Book button
bookButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        // Prevent the default link action
        event.preventDefault();

        // Find the booking section
        const bookingSection = document.getElementById("booking");

        // Scroll smoothly to the booking section
        bookingSection.scrollIntoView({
            behavior: "smooth"
        });

        // Display toast notification
        showToast("Please fill in your booking details!");

    });

});

















































































































































































































































































