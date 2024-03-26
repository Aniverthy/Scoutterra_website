/* Sidebar functionality */
function openSidebar() {
    const sidebar = document.getElementById("sidebar");

    // Check if the sidebar is already open
    if (sidebar.style.width === "250px") {
        closeSidebar();
    } else {
        sidebar.style.width = "250px";
        document.body.addEventListener("click", closeSidebarOutside);
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.body.removeEventListener("click", closeSidebarOutside);
}

function closeSidebarOutside(event) {
    // Check if the click is outside the sidebar or the hamburger menu
    if (!event.target.closest("#sidebar") && !event.target.closest(".hamburger")) {
        closeSidebar();
    }
}

/* Smooth scroll functionality */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function navigateTo(page) {
    // Logic to navigate to the specified page, e.g., using window.location.href
    window.location.href = page;
}


document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.getElementById("about");
    var aboutContent = document.querySelector(".about-content");
    var verticalsSection = document.getElementById("verticals");
    var verticalsContent = document.querySelector(".verticals-content");

    var options = {
        threshold: 0.5
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                if (entry.target === aboutSection) {
                    aboutContent.style.opacity = "1";
                } else if (entry.target === verticalsSection) {
                    verticalsContent.style.opacity = "1";
                }
            }
        });
    }, options);

    observer.observe(aboutSection);
    observer.observe(verticalsSection);
});


 // Function to open the popup
    function openPopup() {
        document.getElementById("popup").style.display = "flex";
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }