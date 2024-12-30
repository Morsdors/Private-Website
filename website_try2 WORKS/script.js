document.addEventListener("DOMContentLoaded", function() {
    // Add click event to the contact link
    document.querySelector(".nav-items a[href='#contact']").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        
        // Scroll to the footer smoothly
        document.querySelector("#contact").scrollIntoView({
            behavior: 'smooth' // Smooth scrolling
        });
        
        // Add the 'active' class to the contact info to trigger the animation
        const contactInfo = document.querySelector(".highlight-contact");
        contactInfo.classList.add("active");
        
        // Remove the 'active' class after 1.5 seconds to stop the animation
        setTimeout(function() {
            contactInfo.classList.remove("active");
        }, 1500);
    });

    document.getElementById("menu-toggle").addEventListener("click", function() {
        console.log("Hamburger menu clicked!"); // Debug log
        this.classList.toggle("active"); // Toggles "X" on the icon
        console.log("Menu toggle active class:", this.classList.contains("active"), this.classList); // Debug log

        document.getElementById("nav-items").classList.toggle("active");
        //console.log("Nav items toggle active class:", document.getElementById("nav-items").classList.toString); // Debug log

    });
});
