// Function to open/close mobile menu
function toggleMenu() {
    let navLinks = document.getElementById("navLinks");
    
    // or mobile screen (768px or small), active class must toggle. 
    if (window.innerWidth <= 768) {
        navLinks.classList.toggle("active");
    }
}