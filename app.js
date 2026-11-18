
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


// Select the booking form controls
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

// Select the Booking Summary elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const totalAmount = document.getElementById("totalAmount");

// Function to update the Booking Summary
function updateSummary() {

    // Get selected match
    const selectedMatch = matchSelect.value;

    // Get selected stand
    const selectedStand = standSelect.value;

    // Get ticket quantity
    const quantity = Number(quantityInput.value);

    // Set ticket price based on stand
    let price;

    if (selectedStand === "General") {
        price = 800;
    }
    else if (selectedStand === "Premium") {
        price = 1500;
    }
    else if (selectedStand === "VIP") {
        price = 3000;
    }

    // Calculate total amount
    const total = price * quantity;

    // Update Booking Summary
    summaryMatch.textContent = selectedMatch;
    summaryStand.textContent = selectedStand;
    summaryPrice.textContent = price;
    summaryQuantity.textContent = quantity;
    totalAmount.textContent = total;

    // Show confirmation toast
    showToast("Booking summary updated!");
}

// Add change event listeners
matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
quantityInput.addEventListener("change", updateSummary);

// Activity 8: Grid and List View Toggle

const matchesContainer = document.querySelector(".matches-container");

const gridViewBtn = document.getElementById("gridViewBtn");
const listViewBtn = document.getElementById("listViewBtn");

// Grid View Button
gridViewBtn.addEventListener("click", function() {
    matchesContainer.classList.remove("list-view");
});

// List View Button
listViewBtn.addEventListener("click", function() {
    matchesContainer.classList.add("list-view");
});

// Activity 8: Team Filter

const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", function() {

    const selectedTeam = teamFilter.value;

    matchCards.forEach(function(card) {

        const teams = card.dataset.teams;

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }

    });

});


// Activity 8: Hamburger Menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});















































































































































































































































































