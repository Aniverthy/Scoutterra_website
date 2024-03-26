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